var System = require('systemjs');
require("./config");

System.import('./dist/app.js').then(function(m) {
	m.Run();
}, function(e) {
	console.log("Unable to load app", e);
});
