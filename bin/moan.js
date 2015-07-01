#!/usr/bin/env node
require('shelljs/global');

var child_process = require('child_process');

var argv = process.argv;
argv.shift();

// var file_path = __dirname;
var current_path = process.cwd();


if(argv.length < 1){
  return console.log('Usages: exn project_name');
}


var project_name = argv[1];


if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

var clone = 'git clone --depth=1 https://github.com/moajs/moa-seed.git ' + project_name
// Run external tool synchronously
if (exec(clone).code !== 0) {
  echo('Error: Git clone failed');
  exit(1);
}else{
  echo('Success: exn clone finished!');
}

cd(project_name);

echo('npm install...');

var npm_install = 'moalink'
if (exec(npm_install).code !== 0) {
  echo('Error: npm_install failed');
  exit(1);
}else{
  echo('Success: npm_install finished!');
}

echo('Next step 0: npm start');
echo('Next step 1: moag user name:string password:string uid:object');
echo('Next step 2: moad user');
echo('Have a good day! Moaer');
