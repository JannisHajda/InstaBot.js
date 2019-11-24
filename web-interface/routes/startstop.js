var express = require('express');
var router = express.Router();
const bot = require("./../../src/app");



router.post('/', function (req, res, next) {
    console.log(bot);
    var action = req.body.action; //start or stop
    if (action === "start") {
        bot.start();
        res.send("started");

    }
    else {
        bot.stop();
        res.send("stopped")
    }
});
module.exports = router;