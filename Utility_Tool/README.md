# Utility Tool

## Table of Contents

1. [Introduction](#intro)
2. [How does it work](#howDoesItWork)
3. [How to Set Up](#setUp)
4. [Utility Tool Methods](#methods)
5. [Resources](#resources)

<a name="intro"></a>
## Introduction

Welcome to my Utility Tool for Node JS. This is a program that I created while working on an assignment for my Deployment of Web Applications course at Full Sail University. It was meant to be both an introduction project to creating NPM packages and also working with debugging tools in Node JS. During the creation of this project I leaned multiple things on how to debug while working on projects, but more than that I learned how to rely on tools for certain aspects of Web Development. Since this was a project done while still in College there will probably be a lot of outdated functionality and practices, but feel free to take a look and contact me about it. Thanks for taking the time to look through my projects.

<a name="howDoesItWork"></a>
## How Does it Work?

Utility Tool functions exactly as it is called, a utility tool for debugging. It allows for custom console.log messages that allow for more input that a typical console.log. By passing in certain parameters you can log information more effectively and allow for full information on errors, bugs or successes. Apart from the logging functionality it includes a debugging functionality for objects, which will check an objects current state and either pass it or fail it. Then the last functionality for this application is a version bumper which will bump the version of a Node JS project in the `package.json` file, useful for whenever a major release of a project comes out..

<a name="setUp"></a>
## How to setup

In order to setup the Util tool simply follow these steps:

1. Install the module into your project using `npm install util-tool`

2. Now that you have the module installed simply require it in your project files by using `var util = require('util-tool')`

3. In order to use the debugging functionality of the tool you have to run your project in DEBUG mode. Simply turn DEBUG mode on by running `DEBUG=true` whenever you start the server.

4. Enjoy the utility tool ( ^-^)

The util-tool was tested using Mocha and Chai for the unit testing. But the unit testing is not included in the npm install.

<a name="methods"></a>
## Util Tool Methods

### Logging

In order to log using the util tool simply remember this format `util.writer(title, data, status, consoleMethod)`.

- Title: is the header of the log.
- Data: is any type of data that you pass in. For logging purposes data is simply a placeholder.
- Status: is meant to be any piece of information that would benefit the developer. Ex: `Test #3: Successful function`
- consoleMethod: takes one of the strings in the array based on what kind of console you want ['log', 'warn', 'error'].
They will console in different colors.

Example Output:
```
util.writer('Testing Log', '', 'Test successful', 'log')
//Data was passed in as an empty string in order to leave whitespace.

Output:
=================================================
[2016-06-23T14:48:26-04:00]: Testing Log
=================================================
 "" Test successful
```

### Debugging

The debugging portion of the tool is meant to discern whether or not data is empty or undefined. Simply write it in this format `util.debug(data)`

- Data: is any type of data that you pass in. The util tool was tested with objects, arrays, and strings. When debugging it will check to see if the data was either empty or undefined and log a response accordingly. If the data is correct then it will log successful.

Example Output:
```
// Undefined Test
util.debug()

Output:
=================================================
[2016-06-21T14:29:47-04:00]: Data Check ?
=================================================
 undefined
Data was undefined.

--------------------------------------------------

// Empty Test
util.debug({})

Output:
=================================================
[2016-06-21T14:30:41-04:00]: Data Check -
=================================================
 {}
Data was empty.

--------------------------------------------------

// Successful Test
util.debug(['array'])

Output:
=================================================
[2016-06-21T14:30:41-04:00]: Data Check +
=================================================
 ['array']
Data was passed correctly.
```

---

### Version Bump

This module is good to use with gulp.

Call this module to increment the version number.

#### Usage
```javasc
const util = require('util-tool');

// takes the current version -> (string)  & tag -> (string) ['major', 'minor', 'patch']
util.versionbump('1.0.0', 'major');
```
#### Returns (string)
```
'2.0.0'
```

<a name="resources"></a>
## Resources

*Link to NPM Page*

- [NPM Utility Tool](https://www.npmjs.com/package/util-tool)

*Other Utility Tools Worth Using*

- [Kutil](https://www.npmjs.com/package/kutil)
