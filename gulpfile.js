// JavaScript Document
var gulp = require('gulp')
gulp.task('hello',function() {
	console.log('hello zell');
	
});

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');

gulp.task('source',function(){
return gulp.src('src/js/global.js')
.pipe(rename({suffix:'.min'}))
.pipe(uglify())
.pipe(gulp.dest('build/js'))
})

gulp.task('default',['source']);

gulp.task('comit',function(){
	return gulp.src('src/css/style.css')
	.pipe(rename({suffix:'.min'}))
	.pipe(cssmin())
	.pipe(gulp.dest('build/css'))
})

gulp.task('default',['comit']);

var sourcemaps = require('gulp-sourcemaps');
gulp.task('sas', function () {
 return gulp.src('src/sass/-code.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('build/sass'));
});

gulp.task('default',['sas']);