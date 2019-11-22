const instabot = require("./core/instabot");

const run = async () => {
  console.log("Test");
  InstaBot = new instabot();
  await InstaBot.initPuppeteer();
  await InstaBot.loginCreatorStudio();
  let posts = [{
    description: "Test 1",
    image: "C:/Users/janni/Documents/GitHub/InstaBot.js/src/test.jpg",
    release: {
      date: "23.11.2019",
      time: "18:15"
    }
  }, {
    description: "Test 2",
    image: "C:/Users/janni/Documents/GitHub/InstaBot.js/src/test.jpg",
    release: {
      date: "24.11.2019",
      time: "15:10"
    }
  }]

  await InstaBot.planPosts(posts)

};

run().catch(e => console.log(e));
