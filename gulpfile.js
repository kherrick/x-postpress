const del = require('del')
const gulp = require('gulp')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const spawn = require('child_process').spawn

// cleans the prpl-server build in the server directory
gulp.task('prpl-server:clean', () => del('server/build'))

// copies the prpl-server build to the server directory while renaming the node_modules directory so services like app
// engine will upload it
gulp.task('prpl-server:build', () => {
  const pattern = 'node_modules'
  const replacement = 'node_assets'

  return gulp
    .src('build/**')
    .pipe(
      rename(path => {
        path.basename = path.basename.replace(pattern, replacement)
        path.dirname = path.dirname.replace(pattern, replacement)
      })
    )
    .pipe(replace(pattern, replacement))
    .pipe(gulp.dest('server/build'))
})

gulp.task('prpl-server', gulp.series('prpl-server:clean', 'prpl-server:build'))

// gulp task to run `tsc --watch` and `polymer serve` in parallel
gulp.task('serve', () => {
  const spawnOptions = {
    // `shell` option for windows compatability, see:
    // https://nodejs.org/api/child_process.html#child_process_spawning_bat_and_cmd_files_on_windows
    shell: true,
    stdio: 'inherit'
  }
  spawn('tsc', ['--watch'], spawnOptions)
  spawn('polymer', ['serve', '--hostname 0.0.0.0', '--compile always'], spawnOptions)
})
