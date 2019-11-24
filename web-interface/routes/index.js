var express = require('express');
var router = express.Router();
const database = require('./../../config/database');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { config: database.data });

});
router.post('/', function (req, res, next) {
  var creator_studio = {};
  var instagram = {};
  var puppeteer = {};
  Object.keys(req.body).forEach(key => {
    if (key.startsWith("creator_studio")) {
      creator_studio[key.substring(15)] = req.body[key];
    } else if (key.startsWith("instagram")) {
      instagram[key.substring(10)] = req.body[key];
    } else {
      puppeteer[key.substring(10)] = req.body[key];
    }
  });

  database.updateConfig(instagram, puppeteer, data => {
    res.render("index", { config: data });
  });
});
module.exports = router;
