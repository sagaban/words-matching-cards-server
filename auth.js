const jwt = require("jsonwebtoken");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models").User;

module.exports = function auth(app) {
  // OAuth
  app.use(passport.initialize());
  const opts = {};

  // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  const jwtFromRequest = req => {
    var token = null;
    if (req && req.cookies) {
      token = req.cookies["jwt"];
    }
    return token;
  };
  opts.jwtFromRequest = jwtFromRequest;

  opts.secretOrKey = process.env.JWT_SECRET;
  // TODO: improve this (or not)
  opts.ignoreExpiration = true;

  passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
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

  app.get("/auth/noop", async (req, res, next) => {
    if (process.env.NODE_ENV === "production") {
      res.status(401).send("Unauthorized");
    }
    try {
      const headerUser = JSON.parse(req.headers["x-custom-user"]);
      if (headerUser) {
        const dbUser = await User.findOrCreate({ where: headerUser });
        const user = {
          id: dbUser[0].id,
          email: dbUser[0].email,
          name: dbUser[0].name,
          provider: dbUser[0].provider,
        };

        let token = jwt.sign(
          {
            data: user,
          },
          process.env.JWT_SECRET,
          { expiresIn: 60 } // expiry in seconds
        );
        res.send(token)
      }
    } catch (error) {
      console.error(error);
      res.status(401).send(error);
    }
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
          { expiresIn: 60 } // expiry in seconds
        );
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

  // This add user prop to the request
  app.use("/api", passport.authenticate("jwt", { session: false }));

  // app.use(
  //   "/api",
  //   process.env.NODE_ENV === "production"
  //     ? passport.authenticate("jwt", { session: false })
  //     : async (req, res, next) => {
  //         try {
  //           const headerUser = JSON.parse(req.headers["x-custom-user"] || null);
  //           let user;
  //           if (headerUser) {
  //             const dbUser = await User.findOrCreate({ where: headerUser });
  //             user = {
  //               id: dbUser[0].id,
  //               email: dbUser[0].email,
  //               name: dbUser[0].name,
  //               provider: dbUser[0].provider,
  //             };
  //           } else {
  //             const decoded = jwt.verify(token, process.env.JWT_SECRET, {
  //               ignoreExpiration: true,
  //             });
  //             user = decoded.data;
  //           }
  //           req.user = user;
  //           next();
  //         } catch (error) {
  //           console.error(error);
  //           res.status(401).send(error);
  //         }
  //       }
  // );

  //   app.use("/api", (req, res, next) => {
  //   const token = jwtFromRequest(req);
  //   try {
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET, {
  //       ignoreExpiration: true,
  //     });
  //     req.user = decoded.data;
  //   } catch (error) {
  //     console.error(error);
  //     res.status(401);
  //   }
  //   next();
  // });
};
