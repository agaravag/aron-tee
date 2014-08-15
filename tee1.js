var fs = require('fs');

var outputFile = fs.createWriteStream(process.argv[2]);

console.log('Please type some text. We will print it back, and also save it to ' + process.argv[2]);

process.stdin.pipe(process.stdout);

process.stdin.pipe(outputFile);