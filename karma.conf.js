module.exports = function(config) {
	config.set({
		autoWatch: true,
		autoWatchBatchDelay: 2000,
		basePath: '',
		frameworks: ['jspm', 'jasmine', 'source-map-support'],
		browserDisconnectTimeout: 5000,
		browsers: ['Chrome'],
		jspm: {
			loadFiles: [
				// 'dist/**/*.spec.js'
				'dist/app.spec.js'
			],
			serveFiles: ['app/**/*.ts', 'dist/**/*.js', 'dist/**/*.map']
		},
		colors: true,
		reporters: ['dots'],
		port: 9876,
		singleRun: false,
		exclude: []
	});
};
