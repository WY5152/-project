const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
gulp.task('sass',function(){
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({"suffix":".min"}))
    .pipe(gulp.dest('./dist/css'))
})
gulp.task('js',function(){
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({"suffix":".min"}))
    .pipe(gulp.dest('./dist/js'))
})
gulp.task('img',function(){
    gulp.src('./src/img/img1/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
})
gulp.task('img',function(){
    gulp.src('./src/img/img2/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
})
gulp.task('img',function(){
    gulp.src('./src/img/img3/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
})
gulp.task('img',function(){
    gulp.src('./src/img/img4/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
})
gulp.task('default',function(){
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/img/*.*',['img']);
})