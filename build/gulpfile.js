import gulp from 'gulp';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import minifyCSS from 'gulp-minify-css';
import connect from 'gulp-connect';
import opn from 'opn';
import concat from 'gulp-concat';

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


gulp.task('scripts', gulp.series(function() {
  /* Minify and concat */
  return gulp.src(src.scripts)
    .pipe(uglify())
    //.pipe(concat('all.min.js'))
    .pipe(gulp.dest(out.scripts))
    .pipe(connect.reload());
}));

gulp.task('images', gulp.series(function() {
 return gulp.src(src.images)
    /* Optimize */
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(out.images))
    .pipe(connect.reload());
}));

gulp.task('css', gulp.series(function() {
  return gulp.src(src.css)
    .pipe(minifyCSS())
    //.pipe(concat('all.min.css'))
    .pipe(gulp.dest(out.css))
    .pipe(connect.reload());
}));

gulp.task('fonts', gulp.series(function() {
  return gulp.src(src.fonts)
    .pipe(gulp.dest(out.fonts))
    .pipe(connect.reload());
}));

gulp.task('connect', gulp.series(function() {
  connect.server({
    root: '..',
    port:18080,
    livereload: true
  });
}));

gulp.task('serve', gulp.series('connect', function () {
    opn('http://localhost:8080');
}));

/* Rerun the task when a file changes */
gulp.task('watch', gulp.series(function () {
  gulp.watch(src.scripts, ['scripts']);
  gulp.watch(src.css, ['css']);
  gulp.watch(src.images, ['images']);
  gulp.watch(src.fonts, ['fonts']);
}));

/* The default task (called when you run `gulp` from cli) */
gulp.task('default', gulp.series('scripts', 'images', 'css', 'fonts', 'connect', 'watch'));