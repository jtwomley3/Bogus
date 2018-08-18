/*eslint no-console: ["error", { allow: ["log"] }] */
'use strict';
const fs = require('fs');

fs.createReadStream('.sample-env')
  .pipe(fs.createWriteStream('.env'));

console.log("A .env file has been created for you \nThis is intended to be used for local development \nThis file is on the .gitignore list");
