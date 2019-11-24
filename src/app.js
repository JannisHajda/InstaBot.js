const instabot = require("./core/instabot");
var intervall = null;
const dbScript = require("../config/database");

(async () => {
  try {
    dbScript.connect(async () => {
      InstaBot = new instabot(dbScript.data);
      await InstaBot.initPuppeteer();
      await InstaBot.loginInstagram();
      start();
    })

  } catch (e) {
    console.error(e);
  }


})();


function start() {
  InstaBot.interact();
  intervall = setInterval(function () {
    InstaBot.interact();
  }, 3600000);
}

function stop() {
  clearInterval(intervall);
}