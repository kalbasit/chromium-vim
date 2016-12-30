#!/usr/bin/env node

var parser = require('../parser.js');

var script = require('fs').readFileSync('./test/test.vim', 'utf8');

console.log(JSON.stringify(parser.parse(script), null, 2));
