var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(require("connect-history-api-fallback")());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require("./routes/word")(app);
require("./routes/tag")(app);

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
