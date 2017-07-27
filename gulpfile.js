var fileinclude = require('gulp-file-include'),
    gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('fileinclude', function() {
    gulp.src(['./pages/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('less', function() {
    gulp.src('./style/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css/'))
});


gulp.task('default',['less','fileinclude']);