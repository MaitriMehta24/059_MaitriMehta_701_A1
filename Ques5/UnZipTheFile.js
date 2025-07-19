const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("./file3.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("./file2.txt"));

console.log("File Decompressed.");
