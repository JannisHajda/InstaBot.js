/*
  function startstop(){
    if isRunning == flase {
      let intervall = setInterval(function(){ instabot(); }, 3600000);
     boolean isRunning = true;
   }else{
      clearInterval(intervall);
      isRunning = false;
   }
  }
  
  function instabot(){
  await InstaBot.search(["dog", "cat"]);  
  await InstaBot.unfollow(["thekatiemonroe_"]);
  await InstaBot.like(["B5OFd3-JD4u"]);
  await InstaBot.comment(["B5OFeOxgqCC"]);
  await InstaBot.follow(["thekatiemonroe_"]);
  }
*/

const instabot = require("./core/instabot");

const run = async () => {
  InstaBot = new instabot();
  await InstaBot.initPuppeteer();
  await InstaBot.loginInstagram();
  InstaBot.interact();
  let intervall = setInterval(function() {
    InstaBot.interact();
  }, 3600000);
};

run().catch(e => console.log(e));
