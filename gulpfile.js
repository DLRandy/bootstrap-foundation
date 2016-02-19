var gulp = require('gulp');
gulp.task('default', function () {
	gulp.src(['bower_components/bootstrap/dist/js/bootstrap.min.js',
		'bower_components/jquery/dist/jquery.js'])
	.pipe(gulp.dest('static/js'));
	gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css',
		'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'])
	.pipe(gulp.dest('static/css'));
	gulp.src('bower_components/bootstrap/dist/fonts/*')
	.pipe(gulp.dest('static/fonts'));
});