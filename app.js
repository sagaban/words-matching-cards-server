const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const setupAuth = require("./auth");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

setupAuth(app);

app.use("/api", require("./routes/index"));

app.use(require("connect-history-api-fallback")());

app.use(express.static(path.join(__dirname, "public")));

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}

module.exports = app;
