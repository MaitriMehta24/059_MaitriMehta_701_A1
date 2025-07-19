var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./file1.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('./file3.txt.gz'));
  
console.log("File Compressed.");