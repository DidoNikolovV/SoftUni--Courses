const print = require('./lib/logger');
const url = require('url');

const parsedUrl = url.parse('https://softuni.bg/courses/js-web');

console.log(parsedUrl);