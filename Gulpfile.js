var gulp = require('gulp');
var rename = require('gulp-rename');

var config = require('./gulp-config.json');
var source = config.paths.source;


gulp.task('copy-fonts', function () {
	return gulp.src(config.paths.fonts)
	.pipe(gulp.dest(source + '/fonts/'));
	});

gulp.task('copy-styles', function () {
	return gulp.src(config.paths.css)
	.pipe(rename({ prefix: '_' }))
	.pipe(rename({ extname: '.scss' }))
	.pipe(gulp.dest(source + '/style/'));
	});
