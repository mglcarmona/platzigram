const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');
const title = require('title');

page('/signup', (ctx, next) => {
	title('Platzigram - signup');
  const main = document.getElementById('main-container');
  empty(main).appendChild(template);
});