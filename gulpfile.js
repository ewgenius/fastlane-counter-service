const gulp = require('gulp');
const gutil = require('gulp-util');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const webpack = require('webpack');
const webpackConfig = require('./config/webpack.config.prod');

const tsProjectServer = ts.createProject('src/server/tsconfig.json');

gulp.task('clean:server', () => {
  return gulp.src('./build/server')
    .pipe(clean());
});

gulp.task('clean:client', () => {
  return gulp.src('./build/client')
    .pipe(clean());
});

gulp.task('compile:server', ['clean:server'], () => {
  return gulp.src('./src/server/**/*.ts')
    .pipe(tsProjectServer())
    .pipe(gulp.dest('./build/server'));
});

gulp.task('compile:client', ['clean:client'], done => {
  const compiler = webpack(webpackConfig);
  compiler.run((err, stats) => {
    if (err) {
      gutil.log(err);
    }
    done();
  });
});

gulp.task('default', ['compile:server', 'compile:client']);
