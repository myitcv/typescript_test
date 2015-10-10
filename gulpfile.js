var gulp = require('gulp');
var shell = require("gulp-shell");

gulp.task("default", ["watch"]);

gulp.task("watch", shell.task([
	"tsc --watch"
], {cwd: "app"}));
