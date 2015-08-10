var System = require('systemjs');
require("./config");

System.import('./dist/app.js').then(function(m) {
}, function(e) {
	console.log(e);
});
