process.env.CHROME_BIN = require('puppeteer').executablePath()

const resolve = require('rollup-plugin-node-resolve')
const typescript = require('rollup-plugin-typescript2')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    browsers: ['Chrome'],
    files: [
        { pattern: 'tests/specs/**/*.spec.ts', watched: false },
    ],
    preprocessors: {
        'tests/specs/**/*.spec.ts': ['rollup'],
    },
    customContextFile: 'tests/spec-runner/customContext/context_with_fetch-mock.html',
    rollupPreprocessor: {
      output: {
        format: 'esm'
      },
      plugins: [
        resolve(),
        typescript()
      ]
    },
  })
}
