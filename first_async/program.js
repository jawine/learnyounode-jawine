const fs = require('fs');

var file_path = process.argv[2];

fs.readFile(file_path, 'utf8', function(err, data){
    if (err) throw err;
    console.log(data.split('\n').length - 1);
});