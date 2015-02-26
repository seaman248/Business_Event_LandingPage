var gulp = require('gulp'),

	connect = require('gulp-connect'),
	reloadPort = 3000,

	jade = require('gulp-jade'),

	stylus = require('gulp-stylus'),
	kuoto = require('kouto-swiss'),
	minify = require('gulp-uglify'),

	opn = require('opn'),

	browserify = require('browserify'),
	vss = require('vinyl-source-stream');

var src = {
	root: './src',
	jade: './src/jade',
	js: '/js',
	styl: './src/styl'
};

var dest = {
	root: './dest',
	js: '/js',
	css: './dest/styles',
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

gulp.task('open', function(){
	opn('http://localhost:'+reloadPort, 'chromium-browser');
});

gulp.task('watch', ['style', 'html'], function(){
	gulp.watch(src.styl + '/**/*.styl', ['style']);
	gulp.watch(src.jade + '/**/*.jade', ['html']);
});

gulp.task('default', ['connect', 'watch', 'open']);