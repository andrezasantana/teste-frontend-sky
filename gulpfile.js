const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

//compilar css
function style() {
    return gulp.src([
        'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
        'src/scss/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

//Compilar js
function script() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

//Compilar html
function html() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
}

//Copiar webfonts fontawesome
function webfonts() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
        .pipe(gulp.dest('dist/webfonts'))
        .pipe(browserSync.stream());
}

//verificar alterações no scss
function watch() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('src/js/**/*.js', script);
    gulp.watch('src/*.html', html);
}

exports.watch = gulp.series(style, script, html, webfonts, watch);