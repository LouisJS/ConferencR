//JS
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

/*  GULP TASK
**  gulp.task('nom-de-la-tache', function() {
**    // Do something
**  });
*/

/* GULP WATCHER
** gulp.watch('fichier-a-suivre', ['tache1', 'tache2', 'tache3']);
*/

gulp.task('hello', function() {
  console.log('Hello LouisJS');
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
});
