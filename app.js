var fs = require('fs');

var contents = fs.readFileSync('.gitignore').toString();
console.log(contents);

fs.readFile('.gitignore', function (err, buf) {
    console.log(buf.toString());
});