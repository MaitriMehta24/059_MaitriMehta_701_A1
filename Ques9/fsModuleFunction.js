//create file.txt, rename f2.txt to f1.txt
var fs = require('fs');

fs.writeFile('./file1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Write file!');
}); 

fs.appendFile('./file2.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Appended!!');
}); 

fs.readFile('./file3.txt', 'utf-8',   function (err,data) {
  if (err) throw err;
  console.log("File read="+data);
});

// fs.rename('./f1.txt', './files/f2.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// fs.unlink('./file.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });