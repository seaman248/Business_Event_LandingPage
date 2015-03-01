var gulp = require('gulp'),

	connect = require('gulp-connect'),
	reloadPort = 3000,

	jade = require('gulp-jade'),

	stylus = require('gulp-stylus'),
	kuoto = require('kouto-swiss'),
	minify = require('gulp-uglify'),

	opn = require('opn'),

	browserify = require('browserify'),
	vss = require('vinyl-source-stream'),
	reactify = require('reactify'),

	img = require('gulp-image-optimization');

var src = {
	root: './src',
	jade: './src/jade',
	js: './src/js',
	imgs: './src/img',
	styl: './src/styl'
};

var dest = {
	root: './dest',
	js: './dest/js',
	css: './dest/styles',
	img: './dest/images',
	html: '/'
};

gulp.task('connect', function(){
	connect.server({
		root: 'dest',
		port: reloadPort,
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src(src.jade + '/index.jade')
		.pipe(jade())
		.pipe(gulp.dest(dest.root + dest.html))
		.pipe(connect.reload());
});

gulp.task('style', function(){
	gulp.src(src.styl + '/index.styl')
		.pipe(stylus({
			use: [kuoto()],
			compress: true
		}))
		.pipe(gulp.dest(dest.css))
		.pipe(connect.reload());
});

gulp.task('img', function(){
	gulp.src([src.imgs + '/**/*.png', src.imgs + '/**/*.jpg', src.imgs + '/**/*.gif', src.imgs + '/**/*.jpeg'])
		.pipe(img({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(dest.img))
});

gulp.task('js', function(){
	var b = browserify();
	b.transform(reactify);
	b.add('./src/jsx/index.jsx');
	b.bundle()
		.pipe(vss('index.js'))
		.pipe(gulp.dest('./dest/js'))
		.pipe(connect.reload());
});

gulp.task('open', function(){
	opn('http://localhost:'+reloadPort, 'chromium-browser');
});

gulp.task('watch', ['style', 'html'], function(){
	gulp.watch(src.styl + '/**/*.styl', ['style']);
	gulp.watch(src.jade + '/**/*.jade', ['html']);
	gulp.watch('./src/jsx/**/*.jsx', ['js']);
});

gulp.task('default', ['connect', 'watch', 'open']);