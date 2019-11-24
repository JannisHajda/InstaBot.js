var express = require('express');
var router = express.Router();
const firebaseDatabase = require("./../firebase/database");

/* GET home page. */
router.get('/', function(req, res, next) {
    firebaseDatabase.getHashtags(hashtags=>{
        res.render("hashtags",{hashtags:hashtags});
    })
    
});

router.post('/', function(req, res, next) {
    firebaseDatabase.putHashtags(req.body.hashtags,hashtags=>{
        res.render("hashtags",{hashtags:hashtags});
    })
});
module.exports = router;
