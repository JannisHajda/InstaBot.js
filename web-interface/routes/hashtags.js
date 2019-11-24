var express = require('express');
var router = express.Router();
const database = require("./../../config/database");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render("hashtags", { hashtags: database.data.hashtags });

});

router.post('/', async (req, res, next) => {
    var hashtags = await database.putHashtags().hashtags;
    res.render("hashtags", { hashtags });

});
module.exports = router;
