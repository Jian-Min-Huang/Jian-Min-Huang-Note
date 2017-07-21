var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');
 
gulp.task('fileinclude', function() {
  gulp.src(['./pages/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist'));
});

// 建立預設 gulp task
//gulp.task('default', function () {
    //console.log('hi~hi~hi~~~');
//});
