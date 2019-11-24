var express = require('express');
var router = express.Router();
const firebaseDatabase = require("./../firebase/database");
//const instabot = require("./../../src/index");


router.post('/', function(req, res, next) {
    var action = req.body.action; //start or stop
    if (action === "start"){
            //instabot.start();
            res.send("started");
        
    }
    else{
        //instabot.stop();
        res.send("stopped")
    }
});
module.exports = router;