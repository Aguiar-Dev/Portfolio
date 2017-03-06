/***
**
* Title: ECMAScript6 Features
* Author: Fernando L. Aguiar Guevarez
* Date: 03/05/17
**
***/
/*jshint esversion: 6 */
(function(){

  /********** Keyword: Let **********/
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

  /********** Keyword: Const **********/
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
  let tomatoSauce = (t, s) => t + ' ' + s;
  // For single parameter functions it isn't neccessary to include parenthesis
  let tomatoParty = t => t + ' Party';

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
      console.log('Hi! My name is ' + this.name + '. I am ' + this.age + ' years old.');
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













})();
