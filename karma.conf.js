module.exports = function(config) {
	config.set({
		autoWatch: true,
		autoWatchBatchDelay: 2000,
		basePath: '',
		frameworks: [ 'jspm', 'jasmine', 'source-map-support'],
		browserDisconnectTimeout: 5000,
		browsers: ['Chrome'],
		files: [
			'goog/base.js',
			{pattern: "goog/**/*.js", included: false, served: true},
			"protobuf/message.js",
			"protobuf/binary/arith.js",
			"protobuf/binary/constants.js",
			"protobuf/binary/utils.js",
			"protobuf/binary/decoder.js",
			"protobuf/binary/reader.js",
			"protobuf/binary/writer.js",
		],
		jspm: {
			loadFiles: [
				'dist/**/*.spec.js'
			],
			serveFiles: ['src/**/*.ts', 'dist/**/*.js', 'dist/**/*.map']
		},
		colors: true,
		reporters: ['dots'],
		port: 9876,
		singleRun: false,
		exclude: []
	});
};
