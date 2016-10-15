const page = require('page');
page('/', function() {
	const main = document.getElementById('main-container');
  main.innerHTML = '<a href="/signup">signup</a>';
});