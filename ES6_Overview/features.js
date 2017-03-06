/***
**
* Title: ECMAScript6 Features
* Author: Fernando L. Aguiar Guevarez
* Date: 03/05/17
**
***/
/*jshint esversion: 6 */
(function(){

  /********** Let **********/
  // ES6 Standards
  // Define lets
  let v = 'value';
  let a = [1, 2, 3];
  let o = {name: 'Odin', race: 'cat'};

  // Display all values
  console.log(v);
  console.log(a);
  console.log(o);

  // Change lets
  v = 'new value';
  a[1] = 'hello';
  o.name = 'Thor';

  // Display new values
  console.log(v);
  console.log(a);
  console.log(o);

  /********** Const **********/
  // Define constants
  const dog = 'Kaii';
  const cat = {name: 'Odin', age: 1};

  // Trying to change the value will result in error for consts, but changing const object properties is allowed
  cat.name = 'Loki';

  // Display const information
  console.log(cat);

  /********** Arrow Functions **********/
  // Declare lets
  let t = 'Tomato';
  let s = 'Sauce';

  // create inline function to join the t and s lets
  let tomatoSauce = (t, s) => `${t} ${s}`;
  // For single parameter functions it isn't neccessary to include parenthesis
  let tomatoParty = t => `${t} Party`;

  // Display the results
  console.log(tomatoSauce(t, s));
  console.log(tomatoParty(t));

  /********** Template Strings **********/
  // Declare object for use in the Strings
  let person = {
    firstName: 'John',
    lastName: 'Doe',
    profession: 'Web Developer',
    age: 20
  };

  // Single line Template String setup, remember template strings can also be multiple lines.
  let message = `Hello! My name is ${person.firstName} ${person.lastName}. I work as a professional ${person.profession} over at Full Sail University, which is also where I graduated from at the age of ${person.age}`;

  // Display Template String
  console.log(message);

  /********** Classes **********/
  // Declare class constructor and prototype
  class Dog{
    constructor(name, breed, age){
      this.name = name;
      this.breed = breed;
      this.age = age;
    }

    // Declare some prototype methods
    bark() {
      console.log('Woof! Woof!');
    }
    speak() {
      console.log(`Hi! My name is ${this.name}. I am ${this.age} years old.`);
    }
  }

  // Declare a new Dog object
  let doggy = new Dog('Shadow', 'Siberian Husky', 2);

  // Run Dog Methods
  doggy.bark();
  doggy.speak();

  /********** Default Parameters **********/
  // Creating function with default parameters set in place
  let displayMessage = (message="No message was passed.") => {
    console.log(message);
  };

  // Display both custom message and default message
  displayMessage(); // Displays default
  displayMessage('Hello World!'); // Displays custom message

  /********** Destructuring Assignment **********/
  // Declare some objects and arrays for use in the example
  let student = {
    firstName: 'Chelsey',
    lastName: 'Cossifos',
    profession: 'Web Designer and Developer'
  };
  let cats = ['Thor', 'Odin', 'Loki'];

  // Set variables equal to object and array values using Destructuring
  // for arrays the naming convention goes in order
  let [cat1, cat2, cat3] = cats;

  // if you just need to access the values fast then do this
  let {firstName, lastName} = student;

  // if you want to name them something else do this
  let {firstName: first, lastName: last, profession: prof} = student;

  // Display extracted values
  console.log(`${cat1} is ${cat2} and ${cat3} brother.`);
  console.log(`${firstName} ${lastName}`);
  console.log(`${first} ${last} is a ${prof}`);

  // Destructuring is also useful to only return certain properties of an object from functions
  let getName = ({firstName: first, lastName: last}) => {
    // will only return the parameters that were set
    return `${first} ${last}`;
  };

  // Display student Name
  console.log(getName(student));

  /********** Inheritance **********/
  // Creating a simple class for inheritance purposes
  class Vehicle{
    constructor(make, model, year){
      this.make = make;
      this.model = model;
      this.year = year;
    }

    drive(){
      console.log(`You are driving a ${this.make} ${this.model}.`);
    }
  }

  // Creating two different extensions of the parent class
  // one for cars
  class Car extends Vehicle {
    constructor(make, model, year, type){
      super(make, model, year);
      this.type = type;
    }
  }
  // one for bikes
  class Bike extends Vehicle {
    constructor(make, model, year, condition) {
      super(make, model, year);
      this.condition = condition;
    }

    wheelie(){
      console.log(`You pop a wheelie with your ${this.year} ${this.model}. It is still in ${this.condition} condition.`);
    }
  }

  // construct some examples
  let mustang = new Car('Ford', 'Mustang', '2010', 'Convertible');
  let fz = new Bike('Yamaha', 'FZ-09', '2017', 'Very Good');

  // display new classes constructed by running methods
  // will display corresponding messages with the new object properties
  mustang.drive();
  fz.wheelie();

  /********** Object Literals **********/
  // Creating a function to make object Literals
  let createDog = (name, breed, age) => {
    return{
      name,
      breed,
      age
    };
  };

  // make a new object with the function
  let newDog = createDog('Fido', 'Golden Terrier', 4);

  // display object literal information
  console.log(`${newDog.name} is a ${newDog.breed} that is ${newDog.age} years old`);








})();
