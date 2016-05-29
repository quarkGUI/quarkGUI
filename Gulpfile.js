/* Add the gulp-config file and  */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    rev = require('gulp-rev'),
    del = require('del');

var config = require('./gulp-config.json');
var assets = config.paths.assets;

gulp.task('scripts', function() {
    return gulp.src(config.paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(assets + '/js/'))
        .pipe(rev())
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(assets + '/js/'))
        .pipe(rev.manifest({base: assets, merge: true}))
        .pipe(gulp.dest(assets + '/'));
});

gulp.task('styles', function() {
    return gulp.src(config.paths.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(assets + '/css/'))
        .pipe(rev())
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest(assets + '/css/'))
        .pipe(rev.manifest({base: assets, merge: true}))
        .pipe(gulp.dest(assets + '/'));
});

gulp.task('fonts', function() {
    return gulp.src(config.paths.fonts)
        .pipe(gulp.dest(assets + '/fonts/'));
});

gulp.task('images', function () {
    return gulp.src(config.paths.images)
        .pipe(gulp.dest(assets + '/images/'));
});

gulp.task('php', function () {
    return gulp.src(config.paths.php)
        .pipe(gulp.dest(assets + '/php/'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/php/**/*.js', ['php']);
});

// Clean
gulp.task('clean', function() {
    return del([assets + '/css', assets + '/js', assets + '/fonts', assets + '/images', assets + '/php']);
});


// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'fonts', 'images', 'php');
});