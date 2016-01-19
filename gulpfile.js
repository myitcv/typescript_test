var gulp = require('gulp');
var shell = require("gulp-shell");
var watch = require("gulp-watch");

gulp.task("watch", shell.task([
	"tsc --watch"
], {cwd: "src"}));

gulp.task("js_watch", function() {
	return gulp.src("src/**/*.js")
		.pipe(watch("src/**/*.js"))
		.pipe(gulp.dest("dist/"));
});

gulp.task("default", ["watch","js_watch"]);
