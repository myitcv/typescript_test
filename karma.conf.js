module.exports = function(config) {
	config.set({
		autoWatch: true,
		autoWatchBatchDelay: 2000,
		basePath: '',
		frameworks: [ 'jspm', 'jasmine', 'source-map-support'],
		browserDisconnectTimeout: 5000,
		browsers: ['Chrome'],
		files: [
			'protobuf/goog/base.js',
			{pattern: "protobuf/goog/**/*.js", included: false, served: true},
			"protobuf/protobuf/message.js",
			"protobuf/protobuf/binary/arith.js",
			"protobuf/protobuf/binary/constants.js",
			"protobuf/protobuf/binary/utils.js",
			"protobuf/protobuf/binary/decoder.js",
			"protobuf/protobuf/binary/reader.js",
			"protobuf/protobuf/binary/writer.js",
		],
		jspm: {
			loadFiles: [
				'dist/**/*.spec.js'
			],
			serveFiles: ['src/**/*.ts', 'dist/**/*.js', 'dist/**/*.map', 'fixtures/**/*.json', 'fixtures/**/*']
		},
		colors: true,
		reporters: ['dots'],
		port: 9876,
		singleRun: false,
		exclude: []
	});
};
