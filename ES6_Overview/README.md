*[back to root directory](../../../)*

# Overview of ES6 Features

## Table of Contents

1. [Introduction](#intro)
2. [What is ECMAScript?](#whatIsECMA)
3. [Testable File](#testing)
4. [ES6 Features](#es6Features)
  - [Let](#let)
  - [Const](#const)
  - [Arrow Functions](#arrowFunction)
  - [Template Strings](#templateStrings)
  - [Classes](#classes)
  - [Default Parameter](#defaultParameter)
  - [Destructuring Assignments](#destructuring)
  - [Inheritance](#inheritance)
  - [Object Literals](#objectLiterals)
  - [Rest and Spread](#restSpread)
  - [Sets](#sets)
  - [Promises](#promises)
  - [Maps](#maps)
5. [Resources](#resources)

<a name="intro"></a>
## Introduction

Welcome to the Overview on ECMAScript6, where I intend to showcase it's core features for you to apply in your projects. This Overview is meant to explain the core functionality behind ES6 and the features that are very often overlooked by us developers. My knowledge on ES6 at the start of this project was minimal at best, but during the process of research I have learned how it works and how to correctly apply it to my work.

I sincerely hope that this Overview can help shed some light on the ES6 features that are usually ignored. But more than that I hope that it is of help to you in your pursuit of learning ECMAScript6 and its secrets. Since this is meant to be an informative project I give full credit to the articles, guides, websites, videos and sources of information from where I collected all of the information. All of these resources can be found in the Resources Section.

<a name="whatIsECMA"></a>
## What is ECMAScript?

ECMAScript, more commonly referred to ES, is a trademarked scripting-language specification standardized by Ecma International. But it was developed originally by Brendan Eich of Netscape under the name of Mocha, which was later changed to LiveScript and then finally JavaScript. It was announced in December 1995 and was subsequently released in March 1996 as Netscape Navigator, featuring support for JavaScript. Netscape eventually delivered JavaScript to Ecma International for standardization and this is where ECMAScript was born.

Being originally based off JavaScript, it became one of the main tools for JavaScript developers. Typically used in client-side scripting for websites and applications on the web, it has become one of the most utilized standards in the industry. Recently it has been picking up more fame by being used to script web based application with NodeJS. Now while many scripting languages like JavaScript aim to be compatible with ES, they all still deliver independent features which are not supported by the standards.

ECMAScript6 is the most recent implementation of ECMAScript standardization also known as the 6th and 7th edition of ECMAScript. It originally released on June 2015 and was the first update to the standards of ECMAScript since 2009. Although this release included many new features, it was still incomplete and was missing browser support at the time. Then an additional release was made in June 2016 that included additional features and was considered the true release of ES6, which by this time ES6 had more substantial browser support.

<a name="testing"></a>
## Testable File

For testing purposes I have included a *[features.js](./features.js)* file in which all example code is compiled and implemented in a self-executing function. If interested in testing and toying around with the features covered in this overview follow these steps:

1. First make sure to clone the original repository for the overview by running `git clone TBD` on your terminal.

2. Once the repository has been cloned add a new file to the project root folder. It can be called whaterver you would like to call it, but make sure it is an HTML file. (Ex. `blank.html`)

3. Now inside the HTML file you have to add the following line of code to test the features. `<html> <head> <script type = "text/javascript" src = "./features.js"></script></head> </html>`

4. Now you are setup and ready to test these features out yourself. Feel free to change variable names, make changes and test as much as you can in the features.js file.

<a name="es6Features"></a>
## ES6 Features

Here I will outline all of the popular features in ES6 Standards that can be applied in JavaScript. Each Feature will be defined and then shown an example code snippet. For all feature example code refer to the *[features.js file](./features.js)*.

<a name="let"></a>
### Let

Declares a local variable in the block scope. The Let keyword can only be used within the scope it was declared, unless it is returned.

```JavaScript
// Define let variables
let v = "value";
let a = [1, 2, 3];
let o = {name: "Odin", race: "cat"};

// Display all values
console.log(v);
console.log(a);
console.log(o);

// Change let variables
v = "new value";
a[1] = "hello";
o.name = "Thor";

// Display new values
console.log(v);
console.log(a);
console.log(o);
```

<a name="const"></a>
### Const

A const or constant declaration is where once the variable is set it cannot be changed.

```JavaScript
// Define const variable
const dog = "Kai";
const cat = {name: "Odin", age: 1};

// Trying to change the value will result in error for const, but changing const object properties is allowed
cat.name = "Thor";

// Display const information
console.log(cat);
```

<a name="arrowFunction"></a>
### Arrow Functions

In ES6 arrows are a shorthand for writing functions. It is useful when writing functions inside if statements, inline functions and to simply create short fun

```JavaScript
// Define constants
const dog = "Kaii";
const cat = {name: "Odin", age: 1};

// Trying to change the value will result in error for consts, but changing const object properties is allowed
cat.name = "Loki";

// Display const information
console.log(cat);

/********** Arrow Functions **********/
// Declare lets
let t = "Tomato";
let s = "Sauce";

// create inline function to join the t and s lets
let tomatoSauce = (t, s) => t + ' ' + s;
// For single parameter functions it isn't neccessary to include parenthesis
let tomatoParty = t => t + ' Party';

// Display the results
console.log(tomatoSauce(t, s));
console.log(tomatoParty(t));
```

<a name="templateString"></a>
### Template Strings

In ES6 concatenating strings has been made easier by including the Template Strings feature. Each template string is declared using a backtick at the start and end of the string. These strings allow the use of inline variable by adding them like this ${variable}. The template strings can also be multiline.

```JavaScript
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
```

<a name="classes"></a>
### Classes

JavaScript is an object oriented language where classes are used constantly. Now in ES6 classes were introduced to a new class syntax which makes setting up the class much faster.

```JavaScript
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
```

<a name="defaultParameter"></a>
### Default Parameters

With ES6 comes the ability to set default values if none exist, which allows for more versatility when creating functions.

```JavaScript
// Creating function with default parameters set in place
let displayMessage = (message="No message was passed.") => {
  console.log(message);
};

// Display both custom message and default message
displayMessage(); // Displays default
displayMessage('Hello World!'); // Displays custom message
```

<a name="destructuring"></a>
### Destructuring Assignment

Destructuring Assignment is a simple and effective way to extract values from arrays and objects without complicated logic.

```Javascript
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
console.log(cat1 + ' is ' + cat2 + ' and ' + cat3 + ' brother.');
console.log(firstName + ' ' + lastName);
console.log(first + ' ' + last + ' is a ' + prof);

// Destructuring is also useful to only return certain properties of an object from functions
let getName = ({firstName: first, lastName: last}) => {
  // will only return the parameters that were set
  return first + ' ' + last;
};

// Display student Name
console.log(getName(student));
```

<a name="inheritance"></a>
### Inheritance

Inheritance has been simplified with the addition of the extends and super keywords. This helps create a more intuitive, object oriented programming style and boilerplate-free inheritance.

```JavaScript
// Creating a simple class for inheritance purposes
class Vehicle{
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive(){
    console.log('You are driving a ' + this.make + ' ' + this.model);
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
    console.log('You pop a wheelie with your ' + this.year + ' ' + this.model + '. It si still in ' + this.condition + ' condition.');
  }
}

// construct some examples
let mustang = new Car('Ford', 'Mustang', '2010', 'Convertible');
let fz = new Bike('Yamaha', 'FZ-09', '2017', 'Very Good');

// display new classes constructed by running methods
mustang.drive();
fz.wheelie();
```

<a name="objectLiterals"></a>
### Object Literals

With ES6 comes the ability to do shorthand when creating object literals. This allows for easier creation of objects and more concise code blocks.

```JavaScript
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
```

<a name="restSpread"></a>
### Rest and Spread

With the `rest` parameter you can easily extract the remaining arguments into one single parameter. With the `spread` prefix we can extend variables in order to pass in full arrays without having to call individual items.

```JavaScript
// Declare an array for use in a function for a more complex example
// the parameter `...food` is the rest parameter
let foods = ['fries', 'sandwich', 'soda', 'ice cream', 'peppermint'];
let orderLength = (...food) => {
  // display length of array with ...
  return `${food.length} items ordered.`;
};

// Pass in parameters using the spread prefix of `...`, the function will display 5 items ordered
console.log(orderLength(...foods));
```

<a name="sets"></a>
### Sets

ES6 introduced a new data-type called `sets`, which allows us to avoid repetition and complicated data changing. Sets come with built-in methods that allow easy data manipulation and information.

```JavaScript
/*
  Common Methods:
    set.size      // returns the size of the set
    set.entries() // returns entries in the set
    set.keys()    // returns set keywords
    set.values()  // returns set values

  Manipulation Methods:
    set.has(value)
    set.add(value)
    set.delete(value)
*/
// Create a new set with some names
let set = new Set(['Joe', 'Sean', 'Ed', 'Chris']);
console.log(set);
// Add new items to the set
set.add('Liu');

// Delete items from the set
set.delete('Sean');

// Check for both true and false returns
console.log(`The set has Liu: ${set.has('Liu')}`);
console.log(`The set has Sean: ${set.has('Sean')}`);

// Check for the set size
console.log(`The set has ${set.size} names`);

// Display all keys, values and entries
for(let value of set.keys()) {
  console.log(value);
}
for(let value of set.values()) {
  console.log(value);
}
for(let value of set.entries()) {
  console.log(value);
}
```

<a name="promises"></a>
### Promises

With ES6 comes the long awaited addition of support for Promises. With Promises you can define values and functionality to be done when a code block is finished running.

```JavaScript
// Creating a function to return a promise after a second passes
let returnPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 1000);
  });
};

// Creating a function to run once promise is returned
let displayMsg = () => {
  console.log('Promise returned successfully');
};

// run function and catch the promise
returnPromise().then(displayMsg);
```

<a name="maps"></a>
### Maps

Maps are very much like sets, except they are made to explicitly work with key/value pairings. They substitute objects and also have the ability to have any value as a key.

```JavaScript
/*
  Common Methods:
    map.size      // returns the size of the map
    map.entries() // returns entries in the map
    map.keys()    // returns map keywords
    map.values()  // returns map values

  Manipulation Methods:
    map.has(key) // boolean returned
    map.set(key, value)
    map.get(key) // returns value
    map.delete(key)
*/
// Creating a base map for use
let map = new Map();

// Setting map pairings
map.set('Teacher', 'Edward');
map.set('Student', 'Sean');
map.set('Mascot', 'Chelsey');

// Set random values as keys
map.set(true, 'boolean');
map.set(new Date(), 'Date');

// Deleting a pairing only requires the key name
map.delete('Student');

// Display information on the map
console.log(`The map contains ${map.size} pairings`);
console.log(`The map has a Mascot: ${map.has('Mascot')}`);
console.log(`The map has a Student: ${map.has('Student')}`);

// Display all keys, values and pairings
for(let value of map.keys()) {
  console.log(value);
}
for(let value of map.values()) {
  console.log(value);
}
for(let value of map.entries()) {
  console.log(value);
}
```

<a name="resources"></a>
## Resources

**ECMAScript Information**

- [ECMAScript Wikipedia](https://en.wikipedia.org/wiki/ECMAScript)

- [What is ECMAScript?](http://stackoverflow.com/questions/4269150/what-is-ecmascript)

- [JavaScript: What is ECMAScript?](http://www.programmerinterview.com/index.php/javascript/javascript-what-is-ecmascript/)

**ES6 Features**

- [Javascript an Introduction to ES6](https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f#.2fmsetqdt)

- [Luke Hoban Overview of ECMAScript 6](https://github.com/lukehoban/es6features#arrows)

- [Get Started with ECMAScript 6](http://blog.teamtreehouse.com/get-started-ecmascript-6)

- [ES6 Features](http://es6-features.org/)

- [Getting Started with ES6](http://www.2ality.com/2015/08/getting-started-es6.html)
