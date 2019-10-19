const { generateBaselineScreenshots } = require('./utilities/screenshots')
const { startServer } = require('polyserve')
const baselineDir = `${process.cwd()}/tests/screenshots/baseline`
const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

describe('🎁 generating baseline screenshots', () => {
  let polyserve, browser, page

  before(async function() {
    polyserve = await startServer({
      port: 4444,
      root: path.join(__dirname, '../..'),
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

    if (!fs.existsSync(`${baselineDir}/error`)) {
      fs.mkdirSync(`${baselineDir}/error`)
    }
  })

  after(done => polyserve.close(done))

  beforeEach(async function() {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
  })

  afterEach(() => browser.close())

  it('did it', async function() {
    return generateBaselineScreenshots(baselineDir, browser)
  })
})
