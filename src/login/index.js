const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');
const title = require('title');

page('/login', (ctx, next) => {
	title('Platzigram - login');
  const main = document.getElementById('main-container');
  empty(main).appendChild(template);
});