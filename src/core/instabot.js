class InstaBot {
  constructor() {
    this.config = require("../config/config.json");
  }

  async initPuppeteer() {
    const puppeteer = require("puppeteer");
    this.browser = await puppeteer.launch({ headless: this.config.puppeteer.headless })
    this.page = await this.browser.newPage()
    this.page.setViewport({ width: 1280, height: 720 });
  }

  async closeBrowser() {
    await this.page.close()
  }

  async loginInstagram() {
    await this.page.goto(this.config.instagram.base_url, { waitUntil: 'networkidle2' })

    /* Click login button */
    let loginButton = await this.page.$x('//a[contains(text(), "Log in")]')
    await loginButton[0].click()
    await this.page.waitFor(1000)

    /* Type username and password */
    await this.page.type('input[name="username"]', this.config.instagram.username, { delay: 125 })
    await this.page.type('input[type="password"]', this.config.instagram.password, { delay: 125 })
    await this.page.waitFor(500)

    /* Click login button */
    loginButton = await this.page.$('button[type="submit"]')
    await loginButton.click()
  }

  async loginCreatorStudio() {
    await this.page.goto(this.config.creator_studio.base_url, { waitUntil: 'networkidle2' })

    /* Click login button */
    let loginButton = await this.page.$x('//div[contains(text(), "Log In or Sign Up")]')
    await loginButton[0].click()
    await this.page.waitFor(1000)

    /* Type username and password */
    await this.page.type('input[name="email"]', this.config.creator_studio.email, { delay: 32 })
    await this.page.type('input[type="password"]', this.config.creator_studio.password, { delay: 32 })
    await this.page.waitFor(500)

    /* Click login button */
    loginButton = await this.page.$('button#loginbutton')
    await loginButton.click()

    await this.page.waitForNavigation({ waitUntil: 'networkidle2' })
  }

  async planPosts(posts) {
    for (let i = 0; i < posts.length; i++) {
      await this.page.goto("https://business.facebook.com/creatorstudio/?tab=instagram_content_posts&mode=instagram&collection_id=all_pages&content_table=INSTAGRAM_POSTS", { waitUntil: 'networkidle2' })

      /* Click create post button */
      let createPostButton = await this.page.$('a[data-testid="create_post_button"]')
      await createPostButton.click()
      await this.page.waitFor(1000)

      /* Click instagram feed button */
      let instagramFeedButton = await this.page.$('span[data-testid="instagram_feed_button"]')
      await instagramFeedButton.click()
      await this.page.waitFor(5000)

      /* Click account button */
      let accountButton = await this.page.$x(`//div[contains(text(), "${this.config.instagram.username}")]`)
      await accountButton[0].click()

      /* Add description */
      let descriptionInput = await this.page.$('div[aria-autocomplete="list"]')
      await descriptionInput.type(posts[i].description)

      /* Upload image */
      let addContentButton = await this.page.$('span[data-testid="primary_add_content_button"]')
      await addContentButton.click()
      await this.page.waitFor(250)

      let imageInput = await this.page.$('input[type="file"]')
      await imageInput.uploadFile(posts[i].image)

      /* Click arrow button */
      let arrowButton = await this.page.$$('button[aria-haspopup="true"]')
      await arrowButton[2].click()
      await this.page.waitFor(250)

      /* Click schedule post button */
      let schedulePostButton = await this.page.$$('div[role="checkbox"]')
      await schedulePostButton[1].click()

      let dateInput = await this.page.$('input[placeholder="tt.mm.jjjj"]')
      await dateInput.type(posts[i].release.date)
      await this.page.waitFor(250)

      let timeInput = await this.page.$$('input[role="spinbutton"]')
      await timeInput[1].type(posts[i].release.time)

      /* Click publish button */
      let publishButton = await this.page.$('button[data-testid="publish_button"]')
      await publishButton.click()
      await this.page.waitFor(5000)
    }
  }
}

module.exports = InstaBot;
