var gulp       = require('gulp'),
    autoprefixer = require('autoprefixer'),
    cssnext      = require('postcss-cssnext'),
    colorfunction = require('postcss-color-function'),
    postcss    = require('gulp-postcss'),
    rgbafallback = require('postcss-color-rgba-fallback'),
    shortcss = require('postcss-short');

gulp.task('css', function() {

    var plugins = [
            shortcss,
            cssnext,
            autoprefixer({
                browsers: ['> 1%'],
                cascade: false
            }),
            rgbafallback,
            colorfunction
        ];

    return gulp.src('initial/*.css')
                              .pipe(postcss(plugins))
                              .pipe(gulp.dest('final'));
                              });
