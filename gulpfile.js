var gulp = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var ts = require("gulp-typescript");
var babel = require("gulp-babel");
var print = require("gulp-print");
var shell = require("gulp-shell");

// var babelOptions = {
// 	modules: "system",
// 	optional: ["es7.objectRestSpread", "es7.classProperties", "strict"]
// };

// gulp.task("watch", ["ts"], function() {
// 	gulp.watch("app/**/*.ts", ["ts"]);
// });

gulp.task("default", ["ts"]);

gulp.task("ts", shell.task([
	"tsc"
], {cwd: "app"}));

gulp.task("watch", shell.task([
	"tsc --watch"
], {cwd: "app"}));
