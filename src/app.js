const Instabot = require("./core/instabot");
var intervall = null;
const dbScript = require("../config/database");



/* (async () => {
  try {
    dbScript.connect(async () => {
      instaBot = new Instabot(dbScript.data);
      await instaBot.initPuppeteer();
      await instaBot.loginInstagram();
      start();
    })

  } catch (e) {
    console.error(e);
  }


})(); */


async function start() {
  instaBot = new Instabot(dbScript.data);
  await instaBot.initPuppeteer();
  await instaBot.loginInstagram();
  instaBot.interact();
  intervall = setInterval(function () {
    instaBot.interact();
  }, 3600000);
}

function stop() {
  clearInterval(intervall);
}

module.exports = {
  start, stop
};