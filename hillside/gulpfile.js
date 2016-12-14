var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps');
    wait = require('gulp-wait');



gulp.task('sass', function () {
     return gulp.src('assets/src/scss/**/*.scss')
       .pipe(wait(15))
       .pipe(sourcemaps.init())
       .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
       .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
       .pipe(sourcemaps.write('.'))
       .pipe(gulp.dest('assets/build/css'))
       .pipe(browser.stream({match: '**/*.css'}));

});

// Starts a BrowerSync instance
gulp.task('serve', ['sass'], function(){
 browser.init({
       server: {
           baseDir: "./"
       }
   });
});

gulp.task('default', ['serve'], function() {    
 gulp.watch(['assets/src/scss/**/*.scss'], ['sass']);
 gulp.watch('./**/*.html').on('change', browser.reload);
});