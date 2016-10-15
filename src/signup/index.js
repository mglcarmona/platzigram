const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');

page('/signup', (ctx, next) => {
  const main = document.getElementById('main-container');
  empty(main).appendChild(template);
});