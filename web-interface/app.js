//added by express-generator
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");
const ejs = require("ejs");

const database = require("./../config/database");

//import route files
const indexRouter = require("./routes/index");
const hashtagsRouter = require("./routes/hashtags");
const startstopRouter = require("./routes/startstop");

//express setup
const app = express();

database.connect();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//route setup
app.use("/", indexRouter);
app.use("/hashtags", hashtagsRouter);
app.use("/startstop", startstopRouter);

console.log(database.data);


module.exports = app;
