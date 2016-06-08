'use strict';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import less from 'gulp-less';

const reload = browserSync.reload;
const paths = {
  less: 'src/theme.less',
  dest: 'bin/css/'
};

gulp.task('less', () => {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.dest))
    .pipe(reload({stream: true}));
});

gulp.task('default',()=>{
  browserSync.init({
    server: {
      baseDir: ["test", "bin"]
    }
  });
  gulp.watch("src/*.less", ['less']);
  gulp.watch("test/*.html").on('change', reload);
});

