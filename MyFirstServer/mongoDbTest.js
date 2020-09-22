// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

personSchema.methods.speak = () =>{
    const presentation = this.name 
    ? "My name is" `${this.name}.` 
    : `We are watching you!`;

    console.log(presentation);
}  

  const Person = mongoose.model('Person', personSchema);

  const niklas = new Person({name:'Niklas',age:'33'});
  const jeffrey = new Person({name:'Jeffrey', age:'18'})
  niklas.speak();

  jeffrey.save();

  if (!Person.find({name: niklas.name})){
    niklas.save();
  }
  /*
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }
  
  
const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

const fluffy = new Kitten({ name: 'fluffy' });

fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});
*/
