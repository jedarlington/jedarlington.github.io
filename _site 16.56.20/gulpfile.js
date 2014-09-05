// Include gulp
var gulp = require('gulp');

// Include plugins
/* var sass = require('gulp-sass'); */
var compass = require('gulp-compass');
var csslint = require('gulp-csslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

var paths = {
	compass: ['assets/sass/**/*.scss'],
	js: ['assets/js/libs/*.js'],
	images: ['assets/images/**/*']
};

// Task Compass
gulp.task('compass', function() {
	gulp.src(paths.compass)
	.pipe(compass({
		config_file: './config.rb',
		css: 'assets/stylesheets',
		sass: 'assets/sass'
	}))
	.pipe(gulp.dest('build/css'));
});

// Task CSS Lint
gulp.task('csslint', function() {
	gulp.src('assets/sass/main.scss')
	.pipe(csslint())
	.pipe(csslint.reporter());
});

// Task js
gulp.task('js', function() {
	return gulp.src(paths.js)
	.pipe(uglify())
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('build/js'));
});

// Task JSHint
gulp.task('jshint', function() {
	return gulp.src('assets/js/main.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'));
});

// Task Images
gulp.task('images', function() {
	return gulp.src(paths.images)
	.pipe(imagemin())
	.pipe(gulp.dest('build/images'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['js']);
    gulp.watch(paths.scripts, ['jshint']);
    gulp.watch(paths.compass, ['compass']);
    //gulp.watch(paths.compass, ['csslint']);
});

// The default task (called when you run 'gulp' from cli)
gulp.task('default', ['compass', 'js', 'jshint', 'images', 'watch']);