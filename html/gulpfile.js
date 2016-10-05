// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/src/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// Concatenate & Minify CSS
gulp.task('styling', function() {
    return gulp.src('css/src/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('css'))
        .pipe(rename('all.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('css/*.css', ['styling']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'styling',  'watch']);