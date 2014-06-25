// Include gulp
var gulp = require('gulp');

// Include plugins
/* var sass = require('gulp-sass'); */
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

var paths = {
	/* sass: ['_assets/_sass/*.scss'], */
	compass: ['_assets/_sass/*.scss'],
	scripts: ['_assets/_js/*.js'],
	images: ['_assets/_images/*']
};

// Task Sass
/*gulp.task('sass', function() {
	return gulp.src(paths.sass)
	.pipe(sass({ errLogToConsole : true }))
	.pipe(sass({ includePaths : ['/libs/']}))
	.pipe(gulp.dest('build/css'));
});*/

// Task Compass
gulp.task('compass', function() {
	gulp.src(paths.compass)
	.pipe(compass({
		config_file: './config.rb',
		css: '_assets/_stylesheets',
		sass: '_assets/_sass'
	}))
	.pipe(gulp.dest('_build/_css'));
});

// Task JS
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
	.pipe(uglify())
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('_build/_js'));
});

// Task Images
gulp.task('images', function() {
	return gulp.src(paths.images)
	.pipe(imagemin())
	.pipe(gulp.dest('_build/_images'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.images, ['images']);
});

// The default task (called when you run 'gulp' from cli)
gulp.task('default', ['compass', 'scripts', 'images']);