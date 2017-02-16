// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

// Concatenate JS
gulp.task('clientlibs', function () {
    return gulp.src('src/js/libs/**/*.js')
        .pipe(gulp.dest('js'));
});

// Concatenate & Uglify JS
gulp.task('concat-minify-scripts', function () {
    return gulp.src(['src/js/*.js', 'pasta/**/*.js' , 'quiz/**/*.js'])
        .pipe(concat('skdebrug.min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('js'));
});

// Concatenate & Minify CSS
gulp.task('concat-minify-styling', function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('skdebrug.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify CSS
gulp.task('concat-minify-clientlib-styling', function () {
    return gulp.src('src/css/libs/*.css')
        .pipe(concat('clientlibs.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(['src/js/*.js', 'pasta/**/*.js', 'quiz/**/*.js' ], ['concat-minify-scripts']);
    gulp.watch('src/js/libs/*.js', ['clientlibs']);
    gulp.watch('src/css/*.css', ['concat-minify-styling']);
    gulp.watch('src/css/libs/*.css', ['concat-minify-clientlib-styling']);
});

// Default Task
gulp.task('default', ['clientlibs', 'concat-minify-scripts', 'concat-minify-styling', 'concat-minify-clientlib-styling', 'watch']);