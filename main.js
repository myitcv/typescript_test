var System = require('systemjs');
require("./config");

System.import('./dist/app.js').then(function(m) {
	console.log(m);
}, function(e) {
	console.log(e);
});
