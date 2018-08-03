var gulp       = require('gulp'),
    autoprefixer = require('autoprefixer'),
    cssnext      = require('postcss-cssnext'),
    postcss    = require('gulp-postcss'),
    shortcss = require('postcss-short');

gulp.task('css', function() {

    var plugins = [
            shortcss,
            cssnext,
            autoprefixer({
                browsers: ['> 1%'],
                cascade: false
            })
        ];

    return gulp.src('initial/*.css')
                              .pipe(postcss(plugins))
                              .pipe(gulp.dest('final'));
                              });
