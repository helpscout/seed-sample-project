'use strict';

var pkg = require('../package.json');
var fs = require('fs');
var mkdirp = require('mkdirp');
var sass = require('node-sass');

var paths = [];

// Default .css compile
sass.render({
  file: './scss/main.scss',
  includePaths: paths
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    mkdirp('./example');
    fs.writeFile('./example/main.css', result.css, function(err){
      if(!err){
        return console.log('main.css created.');
      }
    })
  }
});
