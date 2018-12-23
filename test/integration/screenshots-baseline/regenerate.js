const { generateBaselineScreenshots, interceptNetworkRequests } = require('../utilities')
const { startServer } = require('polyserve')
const baselineDir = `${process.cwd()}/test/integration/screenshots-baseline`
const fs = require('fs')
const path = require('path')
const posts = require('../../fixtures/posts/common')
const puppeteer = require('puppeteer')

describe('🎁 regenerate screenshots', () => {
  let polyserve, browser, page

  before(async function() {
    polyserve = await startServer({
      port: 4444,
      root: path.join(__dirname, '../../..'),
      moduleResolution: 'node'
    })

    // Create the test directory if needed.
    if (!fs.existsSync(baselineDir)) {
      fs.mkdirSync(baselineDir)
    }

    // And it's subdirectories.
    if (!fs.existsSync(`${baselineDir}/wide`)) {
      fs.mkdirSync(`${baselineDir}/wide`)
    }

    if (!fs.existsSync(`${baselineDir}/narrow`)) {
      fs.mkdirSync(`${baselineDir}/narrow`)
    }
  })

  after(done => polyserve.close(done))

  beforeEach(async function() {
    browser = await puppeteer.launch()

    page = await browser.newPage()

    await interceptNetworkRequests(page, JSON.stringify(posts), 'https://example.com/wp-json/wp/v2/posts')
  })

  afterEach(() => browser.close())

  it('did it', async function() {
    return generateBaselineScreenshots(baselineDir, page)
  })
})
