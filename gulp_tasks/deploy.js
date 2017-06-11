const gulp    = require('gulp');
const connect = require('gulp-connect');
const conf    = require('../conf/gulp.conf');

gulp.task('serveprod', function() {
    connect.server({
        root      : conf.path.dist(),
        port      : process.env.PORT || 5000, // localhost:5000
        livereload: false
    });
});