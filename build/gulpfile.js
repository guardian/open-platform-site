var gulp = require('gulp');

//var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');
var opn = require('opn')

var src = {
  scripts: '../assets/js/*',
  images: '../assets/img/*',
  css: '../assets/css/*',
  fonts: '../assets/fonts/*',
};

var out = {
  scripts: '../public/js',
  images: '../public/img',
  css: '../public/css',
  fonts: '../public/fonts'
};


gulp.task('scripts', function() {
  /* Minify and concat */
  return gulp.src(src.scripts)
    .pipe(uglify())
    //.pipe(concat('all.min.js'))
    .pipe(gulp.dest(out.scripts))
    .pipe(connect.reload());
});

gulp.task('images', function() {
 return gulp.src(src.images)
    /* Optimize */
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(out.images))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  return gulp.src(src.css)
    .pipe(minifyCSS(opts))
    //.pipe(concat('all.min.css'))
    .pipe(gulp.dest(out.css))
    .pipe(connect.reload());
});

gulp.task('fonts', function() {
  return gulp.src(src.fonts)
    .pipe(gulp.dest(out.fonts))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: '..',
    port:18080,
    livereload: true
  });
});

gulp.task('serve', ['connect'], function () {
    opn('http://localhost:8080');
});

/* Rerun the task when a file changes */
gulp.task('watch', function () {
  gulp.watch(src.scripts, ['scripts']);
  gulp.watch(src.css, ['css']);
  gulp.watch(src.images, ['images']);
  gulp.watch(src.fonts, ['fonts']);
});

/* The default task (called when you run `gulp` from cli) */
gulp.task('default', ['scripts', 'images', 'css', 'fonts', 'connect', 'watch']);
