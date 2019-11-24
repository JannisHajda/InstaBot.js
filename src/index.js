const instabot = require("./core/instabot");
var intervall;

try {
  InstaBot = new instabot();
  await InstaBot.initPuppeteer();
  await InstaBot.loginInstagram();

} catch (e) {
  console.error(e);
}

start();

function start() {
  InstaBot.interact();
  intervall = setInterval(function () {
    InstaBot.interact();
  }, 3600000);
}

function stop() {
  clearInterval(intervall);
}