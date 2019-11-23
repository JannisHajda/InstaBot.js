const instabot = require("./core/instabot");

const run = async () => {
  InstaBot = new instabot();
  await InstaBot.initPuppeteer();
  let posts = [
    {
      description: "Test 1",
      image: "C:/Users/janni/Documents/GitHub/InstaBot.js/src/test.jpg",
      release: {
        date: "23.11.2019",
        time: "18:15"
      }
    },
    {
      description: "Test 2",
      image: "C:/Users/janni/Documents/GitHub/InstaBot.js/src/test.jpg",
      release: {
        date: "24.11.2019",
        time: "15:10"
      }
    }
  ];

  await InstaBot.loginInstagram();
  await InstaBot.search(["dog", "cat"]);
  /* await InstaBot.like([
    "B5OFd3-JD4u",
    "https://www.instagram.com/p/B5OFd5rB-mg/"
  ]);*/

  // await InstaBot.comment(["B5OFeOxgqCC"]);
  // await InstaBot.follow(["thekatiemonroe_"]);
};

run().catch(e => console.log(e));
