var gulp = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var ts = require("gulp-typescript");
var babel = require("gulp-babel");
var print = require("gulp-print");

var tsProject = ts.createProject("app/tsconfig.json", {typescript: require("typescript")});

var babelOptions = {
	modules: "system",
	optional: ["es7.objectRestSpread", "es7.classProperties", "strict"]
};

gulp.task("watch", ["ts"], function() {
	gulp.watch("app/**/*.ts", ["ts"]);
});

gulp.task("default", ["ts"]);

gulp.task('ts', function() {
	return gulp.src("app/**/*.ts")
	.pipe(sourcemaps.init())
	.pipe(print(function(filepath) {
		return "ts transpiled: " + filepath;
	}))
	.pipe(ts(tsProject))
	.js.pipe(babel(babelOptions))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("dist"));
});
