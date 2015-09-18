var gulp = require('gulp');
var ts = require("gulp-typescript");
var shell = require("gulp-shell");

gulp.task("default", ["ts"]);

gulp.task("ts", shell.task([
	"tsc"
], {cwd: "app"}));

gulp.task("watch", shell.task([
	"tsc --watch"
], {cwd: "app"}));
