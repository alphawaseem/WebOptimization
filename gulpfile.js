var gulp = require('gulp');
var htmlmin = require('gulp-html-minifier2');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var responsive = require('gulp-responsive');


gulp.task('images', function () {
  return gulp.src('./src/img/*.{png,jpg}')
    .pipe(responsive({
      // produce multiple images from one source
      '2048.png': [
        {
          width: 250
          // height : 250,
          // rename : '2048-small.png'
        },
        {
          width : 500,
          // height : 500,
          rename :'2048-medium.png'
        }
      ],
      'cam_be_like.jpg' : [
        {
          width : 150,
          height : 150,
          rename : 'cam_be_like-small.jpg'
        },
        {
           width: 250,
          height : 250,
          rename : 'cam_be_like-medium.jpg'
        }
      ],
      'mobilewebdev.jpg' : [
        {
          width : 250,
          // height : 250,
          rename : 'mobilewebdev-small.jpg'
        },
        {
          width: 500,
          height : 300,
          rename : 'mobilewebdev-medium.jpg'
        }
      ]

    }))
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('html', function(){
  return gulp.src( './src/*.html' )
  	.pipe(htmlmin({collapseWhitespace: true}))
    .pipe( gulp.dest('./dist/') ); 
});
 
 gulp.task('js', function (cb) {
  pump([
        gulp.src('./src/js/*.js'),
        uglify(),
        gulp.dest('./dist/js')
    ],
    cb
  );
});

gulp.task('views_html', function(){
  return gulp.src( './src/views/*.html' )
  	.pipe(htmlmin({collapseWhitespace: true}))
    .pipe( gulp.dest('./dist/views/') ); 
});

gulp.task('views_js', function (cb) {
  pump([
        gulp.src('./src/views/js/*.js'),
        uglify(),
        gulp.dest('./dist/views/js/')
    ],
    cb
  );
});

gulp.task('views_css', function() {
  return gulp.src('./src/views/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/views/css/'));
});