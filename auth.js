const jwt = require("jsonwebtoken");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models").User;

module.exports = function auth(app) {
  // OAuth
  app.use(passport.initialize());
  const opts = {};

  opts.jwtFromRequest = function (req) {
    var token = null;
    if (req && req.cookies) {
      token = req.cookies["jwt"];
    }
    return token;
  };

  opts.secretOrKey = process.env.JWT_SECRET;

  passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
      console.log("JWT BASED VALIDATION GETTING CALLED");
      try {
        const user = await User.findOne(jwt_payload.data);
        if (user) {
          return done(null, jwt_payload.data);
        }
      } catch (error) {
        console.error("Error finding user: " + error);
      }
      return done(null, false);
    })
  );
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.OAUTH_GOOGLE_SECRET,
        callbackURL: process.env.OAUTH_GOOGLE_CALLBACK_URL,
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log("GOOGLE BASED OAUTH VALIDATION GETTING CALLED");
        return cb(null, profile);
      }
    )
  );

  // These functions are required for getting data To/from JSON returned from Providers
  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  // Oauth user data comes to these redirectURLs
  app.get(
    "/auth/googleRedirect",
    passport.authenticate("google"),
    async (req, res) => {
      let user = {
        name: req.user.displayName,
        email: req.user._json.email,
        provider: req.user.provider,
      };

      try {
        const [dbUser] = await User.findOrCreate({ where: user });
        let token = jwt.sign(
          {
            data: { ...user, id: dbUser.id },
          },
          process.env.JWT_SECRET,
          { expiresIn: 60 }
        ); // expiry in seconds
        res.cookie("jwt", token);
        res.redirect("/cards");
      } catch (error) {
        console.error(
          "There was an error finding or creating a user: " + error
        );
        res.status(500).send({ error: "Something blew up" });
      }
    }
  );

  app.get(
    "/profile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.send(`Welcome user ${req.user.email}`);
    }
  );
};
