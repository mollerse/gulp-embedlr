var gulp = require('gulp');
var embedlr = require('./');
var concat = require('gulp-concat');

gulp.task('test', function(){
  gulp.src('test/fixtures/*.html')
    .pipe(embedlr({src: 'somehost'}))
    .pipe(concat('hello-somehost.html'))
    .pipe(gulp.dest('test/expected/'));
});