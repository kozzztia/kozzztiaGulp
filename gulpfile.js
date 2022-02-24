
const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autopreFixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webphtml = require('gulp-webp-for-html');
const del = require('del');



function cleanDist() {
    return del('dist')
}
function webP() {
    return src('app/images/**/*')
        .pipe(webp())
        .pipe(dest('app/images'))
}

function webpHtml() {
    return src('app/**/*.html')
        .pipe(webphtml())
        .pipe(dest('app'))
}

function imageMin() {
    return src('app/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('dist/images'))
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}
function scripts() {
    return src([
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autopreFixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
}
// cleanDist
// imageMin
function build() {
    return src([
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/*.html',
    ], { base: 'app' })
        .pipe(dest('dist'))
}

exports.webpHtml = webpHtml;
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.imageMin = imageMin;
exports.cleanDist = cleanDist;
exports.webP = webP;
exports.build = series(cleanDist, imageMin, build);
exports.default = parallel(webP, styles, scripts, browsersync, watching)