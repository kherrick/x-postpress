import { playwrightLauncher } from '@web/test-runner-playwright';

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: 'dist/**/*.spec.js',
  nodeResolve: true,
  // open: true,
  // manual: true,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto',

  /** Confgure bare import resolve plugin */
  // nodeResolve: {
  //   exportConditions: ['browser', 'development']
  // },

  /** Amount of browsers to run concurrently */
  // concurrentBrowsers: 2,

  /** Amount of test files per browser to test concurrently */
  // concurrency: 1,

  testRunnerHtml: (testRunnerImport, config) => `
    <html>
      <body>
        <script src="../node_modules/chai/chai.js"></script>
        <script>
          var expect = chai.expect
        </script>
        <script>window.process = { env: { NODE_ENV: "development" } }</script>
        <script type="module" src="${testRunnerImport}"></script>
      </body>
    </html>
  `,

  /** Browsers to run tests on */
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    // playwrightLauncher({ product: 'firefox' }),
    // playwrightLauncher({ product: 'webkit' }),
  ],
});
