const expect = require('chai').expect
const fs = require('fs')
const pixelmatch = require('pixelmatch')
const PNG = require('pngjs').PNG

const compareScreenshots = (baselineDir, currentDir, view) =>
  new Promise((resolve, reject) => {
    let filesRead = 0

    const currentImage = `${currentDir}/${view}.png`
    const baselineImage = `${baselineDir}/${view}.png`

    const doneReading = () => {
      // wait until both files are read
      if (++filesRead < 2) {
        return
      }

      // the files should be the same size
      expect(img1.width, 'image widths are the same').equal(img2.width)
      expect(img1.height, 'image heights are the same').equal(img2.height)

      // visual diff
      const diff = new PNG({ width: img1.width, height: img1.height })

      // skip the bottom/rightmost row of pixels, since it seems to be noise on some machines
      const width = img1.width - 1
      const height = img1.height - 1
      const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.5 })

      const percentDiff = (numDiffPixels / (width * height)) * 100
      const stats = fs.statSync(`${currentDir}/${view}.png`)
      const fileSizeInBytes = stats.size

      console.log(`📸 ${view}.png => ${fileSizeInBytes} bytes, ${percentDiff}% different`)

      //diff.pack().pipe(fs.createWriteStream(`${currentDir}/${view}-diff.png`))

      expect(numDiffPixels, 'number of different pixels').lessThan(50)

      resolve()
    }

    // // for debugging, console.log screenshot in base64
    // fs.createReadStream(currentImage, { encoding: 'base64' })
    //   .on('data', function(data) {
    //     console.log(`got data for ${currentImage}\n--\n`, data)
    //   })
    //   .on('end', () => {
    //     console.log('\n--\n')
    //   })

    const img1 = fs
      .createReadStream(currentImage)
      .pipe(new PNG())
      .on('parsed', doneReading)

    const img2 = fs
      .createReadStream(baselineImage)
      .pipe(new PNG())
      .on('parsed', doneReading)
  })

const wait = async function(ms) {
  return new Promise(resolve => {
    console.log(`waiting for ${ms} millisecond(s)...`)

    setTimeout(() => {
      console.log('...no longer waiting, and moving on')

      resolve()
    }, ms)
  })
}

module.exports = {
  generateBaselineScreenshots: async function(baselineDir, page) {
    const prefixes = ['wide', 'narrow']
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

    for (let i = 0; i < prefixes.length; i++) {
      const prefix = prefixes[i]
      console.log(prefix + '...')

      page.setViewport(breakpoints[i])

      // index
      await page.goto('http://127.0.0.1:4444/')

      // investigate not waiting here
      await wait(3000)

      await page.screenshot({ path: `${baselineDir}/${prefix}/index.png` })
    }
  },
  interceptNetworkRequests: async function(page, payload, url) {
    await page.setRequestInterception(true)

    return page.on('request', request => {
      if (request.url() === url) {
        request.respond({
          status: 200,
          headers: {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: payload
        })
      } else {
        request.continue()
      }
    })
  },
  takeAndCompareScreenshot: async function(baselineDir, currentDir, page, route, filePrefix) {
    // if you didn't specify a file, use the name of the route
    let fileName = filePrefix + '/' + (route ? route : 'index')

    await page.goto(`http://127.0.0.1:4444/${route}`)

    // investigate not waiting here
    await wait(3000)

    await page.screenshot({ path: `${currentDir}/${fileName}.png` })

    return compareScreenshots(baselineDir, currentDir, fileName)
  }
}
