const { interceptNetworkRequests, wait } = require('../utilities')
const { startServer } = require('polyserve')
const baselineDir = `${process.cwd()}/test/integration/screenshots-baseline`
const fs = require('fs')
const path = require('path')
const posts = require('../../fixtures/posts/common')
const puppeteer = require('puppeteer')

describe('🎁 regenerate screenshots', function() {
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
    return generateBaselineScreenshots(page)
  })
})

async function generateBaselineScreenshots(page) {
  const breakpoints = [
    {
      width: 800,
      height: 600
    },
    {
      width: 375,
      height: 667
    }
  ]
  const prefixes = ['wide', 'narrow']

  for (let i = 0; i < prefixes.length; i++) {
    const prefix = prefixes[i]
    console.log(prefix + '...')

    page.setViewport(breakpoints[i])

    // Index.
    await page.goto('http://127.0.0.1:4444/')

    // investigate not waiting here
    await wait(3000)

    await page.screenshot({ path: `${baselineDir}/${prefix}/index.png` })
  }
}
