var express = require('express');
var router = express.Router();
const database = require("./../../config/database");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render("hashtags", { hashtags: database.data.hashtags });

});

router.post('/', function (req, res, next) {
    database.putHashtags(req.body.hashtags, hashtags => {
        res.render("hashtags", { hashtags: database.data.hashtags });
    });
});
module.exports = router;
