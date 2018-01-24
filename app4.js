var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'KC',
    job: 'SDE',
    age: 22
  };
  res.end(JSON.stringify(myObj));
});
console.log('Server started');
server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');


//var myReadStream = fs.createReadStream(__dirname + '/sample.txt', 'utf-8');


/*
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  //res.writeHead(200, {'Content-type': 'text/plain'});
  //var myReadStream = fs.createReadStream(__dirname + '/sample.txt', 'utf-8');
  res.writeHead(200, {'Content-type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
  myReadStream.pipe(res);
});
console.log('Server started');
server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');
*/
/*
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);
*/
/*
myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  myWriteStream.write(chunk);
  //console.log(chunk);
});
*/

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
