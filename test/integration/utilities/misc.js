module.exports = {
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
  wait: async function(ms) {
    return new Promise(resolve => {
      console.log(`waiting for ${ms} millisecond(s)...`)

      setTimeout(() => {
        console.log('...no longer waiting, and moving on')

        resolve()
      }, ms)
    })
  }
}
