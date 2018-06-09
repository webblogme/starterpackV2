// START Editing Project Variables.
// Project related.
var project                 = 'MYPROJECT'; // Project Name.
var projectURL              = 'localhost'; // Local project URL of your already running WordPress site. Could be something like local.dev or localhost:8888.

var projectFolder = './www/';
var projectFileWatch = './www/**/*.php';

// Browsers you care about for autoprefixing.
// Browserlist https        ://github.com/ai/browserslist
const AUTOPREFIXER_BROWSERS = [
    'last 2 version',
    '> 1%',
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4',
    'bb >= 10'
  ];

var gulp         = require('gulp'); // Gulp of-course
var autoprefixer = require('gulp-autoprefixer'); // Autoprefixing magic.

// Utility related plugins.
var rename       = require('gulp-rename'); // Renames files E.g. style.css -> style.min.css
var lineec       = require('gulp-line-ending-corrector'); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)
//var filter       = require('gulp-filter'); // Enables you to work on a subset of the original files by filtering them using globbing.
var sourcemaps   = require('gulp-sourcemaps'); // Maps code in a compressed file (E.g. style.css) back to it’s original position in a source file (E.g. structure.scss, which was later combined with other css files to generate style.css)
var notify       = require('gulp-notify'); // Sends message notification to you
var browserSync  = require('browser-sync').create(); // Reloads browser and injects CSS. Time-saving synchronised browser testing.
var reload       = browserSync.reload; // For manual browser reload.


/*------------------------------my vars------------------------------*/

var less = require('gulp-less');
var lesssourcemap = require('gulp-less-sourcemap');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var notifier = require('node-notifier');

//HILIGHT CONSOLE LOG
//SEE HOW TO https://github.com/chalk/chalk
var chalk = require('chalk');
var log = console.log;

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');

var mylesssrc = projectFolder+'assets/less/';
var mylessdest = projectFolder+'assets/css/';
var mylessfilesEN = 'css.bs3.en.less';
var css_en = 'css.bs3.en.css';
var min_css_en = 'css.bs3.en.min.css';

var less_en = [
	mylesssrc+'css.bs3.en.less',
	mylesssrc+'compress.less',
	mylesssrc+'theme.less',
	mylesssrc+'en.less',
	mylesssrc+'mediaqueries.less',
];


gulp.task( 'browser-sync', function() {
  browserSync.init( {

	proxy: projectURL,
	snippetOptions: {rule:{match: /$/ }},
	browser: 'chrome',
	logLevel: 'info', //debug
	logPrefix: project,
	open: true,
	injectChanges: true,
	files: [{
		match: projectFileWatch,
		fn: function (event, file) {
			this.reload()
		}
	}],

	notify: {
            styles: {
                top: 'auto',
                bottom: '0',
                margin: '0px',
                padding: '5px',
                position: 'fixed',
                fontSize: '1em',
                zIndex: '9999',
                borderRadius: '5px 0px 0px',
                color: 'white',
                textAlign: 'center',
                display: 'block',
                backgroundColor: 'rgba(255, 0, 0, 0.8)'
            }
        }
	
  } );
  
    log(chalk.white.bgCyan.bold('Start browserSync...'));

});



/*------------------------------TASK------------------------------*/

gulp.task('compile-lessEN', function() {  
  gulp.src(mylesssrc+mylessfilesEN)
	.pipe(less())
	.pipe( autoprefixer( AUTOPREFIXER_BROWSERS ) )
	.pipe(rename(min_css_en))
	.pipe(gulp.dest(mylessdest));
	log(chalk.white.bgYellow.bold('LESS CSS processed'));
});

gulp.task('compile-lesssourcemapEN', function() {  
  gulp.src(mylesssrc+mylessfilesEN)
	.pipe(lesssourcemap({
		sourceMap: {
			sourceMapRootpath: '../less' //Optional absolute or relative path to your LESS files 
		}
    }))
	.on('error', function (error) {
		gutil.log(gutil.colors.yellow(error.message))
		// Notify on error. Uses node-notifier
		notifier.notify({
			title: 'Less error',
			time: 8000,
			message: error.message
		})
     })
	.pipe(gulp.dest(mylessdest))
});

 gulp.task('cssinjectEN', function() {
    log(chalk.white.bgYellow.bold('Inject CSS EN!'));
	gulp.src(mylessdest+css_en).pipe(browserSync.stream());
});

gulp.task( 'default', ['browser-sync'], function () {

	gulp.watch(less_en, ['compile-lessEN']);
	gulp.watch(less_en, ['compile-lesssourcemapEN']);
	gulp.watch(mylessdest+css_en, ['cssinjectEN']);
	
});