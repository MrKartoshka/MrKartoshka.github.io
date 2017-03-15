var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps');
    iconfont = require("gulp-iconfont"),
    consolidate = require("gulp-consolidate");



gulp.task('sass', function () {
     return gulp.src('./src/scss/**/*.scss')
       .pipe(sourcemaps.init())
       .pipe(sass().on('error', sass.logError))
       .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
       .pipe(sourcemaps.write('.'))
       .pipe(gulp.dest('build/css'))
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
 gulp.watch(['./src/scss/**/*.scss'], ['sass']);
 gulp.watch('./**/*.html').on('change', browser.reload);
});

//Starts a Icon Build instance
gulp.task("build:icons", function() {
   return gulp.src(["src/icons/*.svg"]) //path to svg icons
     .pipe(iconfont({
       fontName: "fitnes-icons",
       formats: ["ttf", "eot", "woff", "svg"],
       centerHorizontally: true,
       fixedWidth: true,
       normalize: true
     }))
     .on("glyphs", (glyphs) => {

       gulp.src("src/icons/util/*.scss") // Template for scss files
           .pipe(consolidate("lodash", {
               glyphs: glyphs,
               fontName: "fitnes-icons",
               fontPath: "../fonts/"
           }))
           .pipe(gulp.dest("src/scss/icons/")); // generated scss files with classes
     })
     .pipe(gulp.dest("build/fonts/")); // icon font destination
});