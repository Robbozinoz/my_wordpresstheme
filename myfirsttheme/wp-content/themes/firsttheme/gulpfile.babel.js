//ES6 syntax
import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import del from 'del';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';
import replace from 'gulp-replace';
import info from './package.json';


const server = browserSync.create();
const PRODUCTION = yargs.argv.prod;

const paths = {
    styles: {
        src: ['src/assets/scss/main.scss', 'src/assets/scss/admin.scss'],
        dest: 'dist/assets/css'
    },
    images: {
        src: 'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
        dest: 'dist/assets/images'
    },
    scrips: {
        src: ['src/assets/js/bundle.js', 'src/assets/js/admin.js', 'src/assets/js/customize-preview.js'],
        dest: 'dist/assets/js'
    },
    plugins: {
        src: ['../../plugins/_themename-metaboxes/packaged/*', '../../plugins/_themename-shortcodes/packaged/*'],
        dest: 'lib/plugins'
    },
    other: {
        src: ['src/assets/**/*', '!src/assets/{images,js,scss}', '!src/assets/{images, js, scss}/**/*'],
        dest: 'dist/assets'
    },
    package: {
        src: ['**/*', '!.vscode', '!.vscode', '!myfirsttheme_space.code-workspace',
            '!node_modules{,/**}', '!packaged{,/**}', '!src{,/**}', '!.babelrc',
            '!.gitignore', '!gulpfile.babel.js', '!package.json', '!package-lock.json'
        ],
        dest: 'packaged'
    }
}

//Task for server creation
export const serve = (done) => {
    server.init({
        proxy: "http://localhost/JAR/my_wordpresstheme/myfirsttheme/"
    });
    done();
}

//Refresh the browser
export const reload = (done) => {
    server.reload();
    done();
}

//Forced delete
export const clean = () => del(['dist']);


//Task for compiling SCSS
export const styles = () => {
    return gulp.src(paths.styles.src)
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION, cleanCSS({
            compatibility: 'ie8'
        })))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream());
}

//For running the watch scss folder
export const watch = () => {
    gulp.watch('src/assets/scss/**/*.scss', styles);
    gulp.watch('src/assets/js/**/*.js', gulp.series(scripts, reload));
    gulp.watch('**/*.php', reload);
    gulp.watch(paths.images.src, gulp.series(images, reload));
    gulp.watch(paths.other.src, gulp.series(copy, reload));
}

//For minifying all images and sending the resulting image to the assets folder
export const images = () => {
    return gulp.src(paths.images.src)
        .pipe(gulpif(PRODUCTION, imagemin()))
        .pipe(gulp.dest(paths.images.dest));
}

//For compiling js scripts
export const scripts = () => {
    return gulp.src(paths.scrips.src)
        .pipe(named())
        .pipe(webpack({
            module: {
                rules: [{
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babel-preset-env'] //or ['babel-preset-env']
                        }
                    }
                }]
            },
            output: {
                filename: '[name].js'
            },

            //Assign $ to jquery global variable
            externals: {
                jquery: 'jQuery'
            },

            devtool: !PRODUCTION ? 'inline-source-map' : false,
            //devtool: 'inline-source-map',
            mode: PRODUCTION ? 'production' : 'development' //add this
        }))
        //.pipe(gulpif(PRODUCTION, uglify())) //Not required ni Webpack minification
        .pipe(gulp.dest(paths.scrips.dest));
}

//For copying production files to selected folder form src to dist
export const copy = () => {
    return gulp.src(paths.other.src)
        .pipe(gulp.dest(paths.other.dest));
}


//For copying plugin production files to selected folder form src to dist
export const copyPlugins = () => {
    return gulp.src(paths.plugins.src)
        .pipe(gulp.dest(paths.plugins.dest));
}

//Task for compresss theme zip for users
export const compress = () => {
    return gulp.src(paths.package.src)
        .pipe(gulpif((file) => (file.relative.split('.').pop() !== 'zip'), replace('_themename', info.name)))
        .pipe(zip(`${info.name}.zip`))
        .pipe(gulp.dest(paths.package.dest));
}

//For running tasks concurrently
export const dev = gulp.series(clean, gulp.parallel(styles, scripts, images, copy), serve, watch);

export const build = gulp.series(clean, gulp.parallel(styles, scripts, images, copy), copyPlugins);

export const bundle = gulp.series(build, compress);

//Set default task to development task
export default dev;