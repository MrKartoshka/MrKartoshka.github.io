var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('src/scss/main.scss')
        .pipe(sass({includePaths: ['src/scss']}))
        .pipe(gulp.dest('public'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["public/*.css", "public/*.js", "public/*.html"], {
        server: {
            baseDir: "public/"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("src/scss/*.scss", ['sass']);
});