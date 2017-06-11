const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const sourcemaps   = require('gulp-sourcemaps');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const conf         = require('../conf/gulp.conf');
const inject       = require('gulp-inject');

gulp.task('styles', styles);

function styles() {

    const partialsInjectFiles = gulp.src(
        [
            'bower_components/bootstrap-sass/assets/stylesheets/*.scss',
            conf.path.src('/app/**/*.scss')
        ],
        {
            read: false
        });

    const partialsInjectOptions = {
        transform   : (filePath) => {
            filePath = filePath.replace(conf.path.src, '');
            return '@import "' + filePath + '";';
        },
        starttag    : '// injector',
        endtag      : '// endinjector',
        addRootSlash: false
    };

    return gulp.src(conf.path.src('index.scss'))
        .pipe(inject(partialsInjectFiles, partialsInjectOptions))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'})).on('error', conf.errorHandler('Sass'))
        .pipe(postcss([autoprefixer()])).on('error', conf.errorHandler('Autoprefixer'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(conf.path.tmp()))
        .pipe(browserSync.stream());
}
