const { interceptNetworkRequests, takeAndCompareScreenshot } = require('./utilities')
const { startServer } = require('polyserve')
const fs = require('fs')
const path = require('path')
const posts = require('../fixtures/posts/common')
const puppeteer = require('puppeteer')

const currentDir = `${process.cwd()}/test/integration/screenshots-current`
const baselineDir = `${process.cwd()}/test/integration/screenshots-baseline`

describe('👀 page screenshots are correct', () => {
  let polyserve, browser, page

  before(async function() {
    polyserve = await startServer({
      port: 4444,
      root: path.join(__dirname, '../..'),
      moduleResolution: 'node'
    })

    // Create the test directory if needed.
    if (!fs.existsSync(currentDir)) {
      fs.mkdirSync(currentDir)
    }

    // And it's subdirectories.
    if (!fs.existsSync(`${currentDir}/wide`)) {
      fs.mkdirSync(`${currentDir}/wide`)
    }

    if (!fs.existsSync(`${currentDir}/narrow`)) {
      fs.mkdirSync(`${currentDir}/narrow`)
    }
  })

  after(done => polyserve.close(done))

  beforeEach(async function() {
    browser = await puppeteer.launch({
      // headless: false, devtools: true, slowMo: 1000
    })

    page = await browser.newPage()

    await interceptNetworkRequests(page, JSON.stringify(posts), 'https://example.com/wp-json/wp/v2/posts')
  })

  afterEach(() => browser.close())

  describe('wide screen', () => {
    beforeEach(async function() {
      return page.setViewport({ width: 800, height: 600 })
    })

    it('/index.html', async function() {
      return takeAndCompareScreenshot(baselineDir, currentDir, page, '', 'wide')
    })
  })

  describe('narrow screen', () => {
    beforeEach(async function() {
      return page.setViewport({ width: 375, height: 667 })
    })

    it('/index.html', async function() {
      return takeAndCompareScreenshot(baselineDir, currentDir, page, '', 'narrow')
    })
  })
})
