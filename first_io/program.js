/*
"Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument (i.e., process.argv[2]). You do not need to make  
  your own test file. 
  */

const fs = require('fs');

var getNumNewLines = function(path_to_file){
    return fs.readFileSync(path_to_file).toString().split('\n').length - 1
}

var cmd_line_args = process.argv[2]

console.log(getNumNewLines(cmd_line_args));