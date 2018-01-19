var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var ames = new Person('ames');

var people = [james, ames];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + " said: " + msg);
  });
});

james.emit('speak', 'Hello there!');
ames.emit('speak', "How you doin'?");
