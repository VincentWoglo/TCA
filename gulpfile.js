const { series, watch, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');

function Sass(){
    return gulp.src('./Style/Scss/**/*.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('./Style/Css'))
}

function WatchTask(){
    watch('./Style/Scss**/*.scss',
    series(Sass))
}

exports.default = series(
        parallel(Sass),
        WatchTask
    )