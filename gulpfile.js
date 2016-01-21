var gulp = require('gulp');
var shell = require("gulp-shell");
var watch = require("gulp-watch");

gulp.task("tsc", shell.task([
	"tsc"
], {cwd: "src"}));

gulp.task("tsc_watch", shell.task([
	"tsc --watch"
], {cwd: "src"}));

gulp.task("js", function() {
	return gulp.src("src/**/*.js")
		.pipe(gulp.dest("dist/"));
});

gulp.task("js_watch", function() {
	return gulp.src("src/**/*.js")
		.pipe(watch("src/**/*.js"))
		.pipe(gulp.dest("dist/"));
});

gulp.task("default", ["tsc_watch","js_watch"]);
gulp.task("compile", ["tsc", "js"]);
