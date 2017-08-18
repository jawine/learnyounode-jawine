/*
Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument. 
*/

const fs = require('fs');
const path = require('path');

var dirPath = process.argv[2];
var fileExtension = '.' + process.argv[3];

// for file in dirPath, if path.extname(file) == fileExtension, return file

//fs.readdir accepts a directory path and a callback function, returns an array of files in current directory or an error
// fs.readdir(directory_path, callback)


var filesByExtension = fs.readdir(dirPath, function(err, files){
  files.map(function(file){
    // path.extname() accepts a file name and returns the extension
    if (path.extname(file) == fileExtension){
      console.log(file);
      return file;
    }
  });
});




