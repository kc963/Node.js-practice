var stuff = require('./stuff.js');

console.log("Hey there!");
console.log(__dirname);
console.log(__filename);
setTimeout(function(){
  console.log('1 second has passed.');
}, 1000);

var time = 0;

//setInterval(function(){
//  time += 2;
//  console.log(time + ' seconds have passed.');
//}, 2000);

//time = 0;

var timer = setInterval(function(){
  time += 2;
  console.log(time + ' seconds have passed.');
  if (time > 1){
    clearInterval(timer);
  }
}, 2000);

function callFunction(fun){
  fun();
}

function sayHi(){
  console.log('Hi!');
}

//sayHi();

var sayBye = function(){
  console.log("Bye!");
};

//sayBye();

callFunction(sayHi);
callFunction(sayBye);

console.log(stuff.counter(['a','b','c']));
console.log(stuff.adder(5, stuff.pi));
