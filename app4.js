var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/sample.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk received: ');
  console.log(chunk);
});


/* Lorem ipsum
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hello there!');
});
console.log('Server started');
server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');
*/
