const myModule = require('./module.js');

var dirPath = process.argv[2].toString();
var fileExtension = '.' + process.argv[3].toString();


console.log(listFiles(dirPath, fileExtension, ))