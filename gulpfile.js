const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');

const tsProjectServer = ts.createProject('src/server/tsconfig.json');
const tsProjectClient = ts.createProject('src/client/tsconfig.json');

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

gulp.task('compile:client', ['clean:client'], () => {
  return gulp.src(['./src/client/**/*.ts', './src/client/**/*.tsx'])
    .pipe(tsProjectClient())
    .pipe(gulp.dest('./build/client'));
});