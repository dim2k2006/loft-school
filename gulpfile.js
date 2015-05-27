var gulp = require('gulp'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	clean = require('gulp-clean');


// Build
gulp.task('build', ['clean'], function () {
    var assets = useref.assets();
    
    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});



// Clean
gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
		.pipe(clean());
});



// Bower wiredep
gulp.task('bower', function () {
	gulp.src('./app/*.html')
	.pipe(wiredep({
		directory : "app/bower_components"
	}))
	.pipe(gulp.dest('./app'));
});



// Bower watch
gulp.task('watch', function () {
	gulp.watch('bower.json', ['bower']);
})

