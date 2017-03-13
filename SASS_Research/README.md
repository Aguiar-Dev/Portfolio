*[back to root directory](../../../)*

# Sass Research and Examples

## Table of Contents

- [Introduction](#intro)
- [What is Sass?](#whatIsSass)
- [Why use Sass?](#whySass)
- [Setting Up Sass](#settingUp)
  - [Installing Sass](#install)
  - [Sass Applications](#applications)
  - [Sass Folder Structure](#folderStructure)
- [Sass Features](#sassFeatures)
  - [Variables](#vars)
  - [Nesting](#nests)
  - [Operators](#operators)
  - [Functions](#funcs)
  - [Function Directives](#funcDirective)
  - [Mixins](#mixins)
  - [Imports](#imports)
  - [Extend](#extends)
- [Resources](#resources)

<a name="intro"></a>
## Introduction

This project is a Overview of the basic usage of Sass and how to implement it. The purpose of this project is to gain experience in Sass and its multiple uses. Throughout the documentation you will find basics on Sass and examples on how to use it. Included in this research is also a custom project that I implemented using only HTML5, CSS3, and Sass in order to test out the material that I research. I will add instructions on how to clone the repository to view the example webpage.

At the end of the documentation you can find all the resources used for this research project and any tools that were used with Sass. Like always I utilize redacted information from multiple websites and articles so I will try my best to document these in the Resources section of the documentation. Thanks for taking the time to view my Sass Research project, hope you enjoyed it and learned something new.

<a name="whatIsSass"></a>
## What is Sass?

Sass, or Syntactically Awesome Style Sheets, is a CSS preprocessor which allows developers to write stylesheets in a more convenient way and then compiles it into CSS. Sass allows developers to use features such as variables, nesting, functions, and more allowing faster creation and modularity in stylesheets. With Sass stylesheet creation is faster, more organized, and more modular than vanilla CSS.

It was initially designed by Hampton Catlin and developed by Natalie Weizenbaum, then continued as SassScript by Weizenbaum and Chris Eppstein. Because of this Sass consists of two different syntaxes, the original '.sass' which used indentation to separate code blocks and newline chars to separate rules. Then there is the new and most commonly used syntax '.scss', which uses braces to denote code blocks and semicolons to separate lines within a code block.

<a name="whySass"></a>
## Why use Sass?

Sass makes the development workflow easier and more refined that what it is when only using vanilla CSS. It brings to the table features that we have used before when scripting functionality, but allows us to implement this into our styling. Not only does this benefit us, the developers, but it also makes our applications more modular and easier to tweak by new members to the team.

Some of the big benefits to using Sass are:

- Nested syntax
- Defining Variables
- Defining Mixins
- Mathematical Functions
- Importing Files
- Inheritance between styles
- Operational Functions

<a name="settingUp"></a>
## Setting Up Sass

This section is meant to walk you through the process of installing a Sass Compiler on your machine and how to integrate it into projects. Depending on how you would rather use Sass, you can either install it through the command line or by using applications. Since I used the Mac approach for Ruby I will showcase this one. But I will include links to the apps and additional command line instructions.

<a name="install"></a>
### Installing Sass CLI

The following are the instructions to get Sass setup through Ruby. If using a Mac skip to step 3, since Mac comes with Ruby pre-installed, otherwise start from step 1.

1. For a distribution of Linux, you will first need to install Ruby. You can install Ruby through the apt package manager, rbenv, or rvm.

  ```bash
  sudo su -c "gem install sass"
  ```

2. For Windows you will also need to install Ruby on your machine. The fastest approach for this is the use the [Ruby Installer](http://rubyinstaller.org/).

3. If using Mac then Ruby comes pre-installed and since Sass has a Ruby dependency it makes the process easier.

4. Open up terminal or the command prompt on your machine. Install Sass using the following line.

  ```bash
  # Use this to install sass and all dependencies
  gem install sass

  # If error message from the latter use this
  sudo gem install sass
  ```

5. Now double check that you have Sass installed by running `sass -v`.
  ```bash
  # Should return the following, if returned you have Sass installed
  Sass 3.4.22 (Selective Steve)
  ```
6. Now Sass is installed and ready for use. Have fun using Sass!


<a name="applications"></a>
### Sass Applications

The following are the different applications that can be used to get up and running with Sass. Most of them are free, but keep in mind some require payment.

- [CodeKit](http://incident57.com/codekit/)
- [Compass.app](http://compass.handlino.com/)
- [Ghostlab](http://www.vanamco.com/ghostlab/)
- [Hammer](http://hammerformac.com/)
- [Koala](http://koala-app.com/)
- [LiveReload](http://livereload.com/)
- [Prepros](https://prepros.io/)
- [Scout](http://mhs.github.io/scout-app/)


<a name="folderStructure"></a>
### Sass Folder Structure

Although Folder structure is purely up to the developer that is making the application, I wanted to showcase one of the folder structures that seemed to be most popular for Sass.

```text
stylesheets/
|
|-- modules/              # Common modules
|   |-- _all.scss         # Include to get all modules
|   |-- _utility.scss     # Module name
|   |-- _colors.scss      # Etc...
|   ...
|
|-- partials/             # Partials
|   |-- _base.sass        # imports for all mixins + global project variables
|   |-- _buttons.scss     # buttons
|   |-- _figures.scss     # figures
|   |-- _grids.scss       # grids
|   |-- _typography.scss  # typography
|   |-- _reset.scss       # reset
|   ...
|
|-- vendor/               # CSS or Sass from other projects
|   |-- _colorpicker.scss
|   |-- _jquery.ui.core.scss
|   ...
|
`-- main.scss            # primary Sass file
```

An additional step can be taken for projects that are composed of multiple sub-projects.

```text
stylesheets/
|
|-- admin/           # Admin sub-project
|   |-- modules/
|   |-- partials/
|   `-- _base.scss
|
|-- account/         # Account sub-project
|   |-- modules/
|   |-- partials/
|   `-- _base.scss
|
|-- site/            # Site sub-project
|   |-- modules/
|   |-- partials/
|   `-- _base.scss
|
|-- vendor/          # CSS or Sass from other projects
|   |-- _colorpicker-1.1.scss
|   |-- _jquery.ui.core-1.9.1.scss
|   ...
|
|-- admin.scss       # Primary stylesheets for each project
|-- account.scss
`-- site.scss
```

*Folder Architecture acquired from **[The Sassway][sassway]** beginner article written by John W. Long*

<a name="sassFeatures"></a>
## Sass Features

In this section I cover the main features that Sass brings with it. For every feature I provide an in-depth description and example code of how it functions. For more information on these features and more refer to the resources section.

<a name="vars"></a>
### Variables

Sass introduces the ability to incorporate variables into stylesheets making reusable code with ease. In order to define variables simply follow the following syntax.

```scss
// Defining a variable
$bckg_color: #EB7F00;

// Using the defined variable
.button {
  background-color: $bckg_color;
}

// When defining and using variables hyphens and underscores are interchangeable
$column-width: 25%;

.column {
  // Will function properly
  width: $column_width
}
```


Much like variables in scripting languages they are available within the defined scope in the file, therefore if defined inside nested selectors they are only usable within that selector. To make variables that are usable everywhere in the file they have to be defined outside any nested selector.

```scss
// Defining variables within a nested selectors scope
#cta {
  $cta_padding: 25px 15px;
  // Within Scope therefore will work
  padding: $cta_padding;
}

#blog_cta {
  // Outside of original scope therefore won't work
  padding: $cta_padding;
}

// But if defined globally it can work no matter in what scope, there are two different ways to do this.
// The first is by defining the variable like so
$global_color: #000;

.h2 {
  color: $global_color;
}

// The second is by appending the global flag to a variable declared in a scope
.buttons {
  $buttons_color: #000 !global;
  color: $buttons_color;
}

.button_blue {
  color: $buttons_color;
}
```

Another useful flag to use with variables is the `!default`. This allows us to set default values for variables in the event that none is provided. If provided the default value is overwritten.

```scss
// Defining variable and setting !default
$accent_color: #F06060 !default;
```

**Data Types Supported**

- Numbers: `e.g. 1, 2, 3, 4, 12px`
- Strings: `e.g. "foo", 'bar', baz`
- Colors: `e.g. blue, #0f0f0f, rgba(0, 0, 0, 0.5)`
- Booleans: `e.g. true, false`
- Nulls: `e.g. null`
- List of Values: `e.g. 1.5em 1em 0 2em, Helvetica, Arial, sans-serif`
- Value Maps: `e.g. (key1: value1, key2: value2)`

---

<a name="nests"></a>
### Nesting

One of the best and most useful features of Sass is its nesting. It allows us to nest declarations within declarations, making the use of child selectors a thing of the past. But with this nesting capability one has to keep in mind how readable the code will be, therefore it is common practice to not go further than 4 levels into nesting.

```scss
// Making a nested declaration
.buttons {
  width: 50%;

  // nested declarations
  p {
    color: #fff;
  }

  div {
    width: 100%;
    padding: 5px 10px;
  }
}
```

When making nested declarations we can reference the parent selector by using the `&` symbol. These allows for pseudo selectors inside nested declarations.

```scss
// Create the parent selector
.cta {
  width: 80%;
  background-color: #fff;

  // Now make the nested declaration
  .button {
    width: 20%;
    color: #000;
    background-color: #F06060;

    // use the & for the parent reference which will trigger depending on the reference type
    &:hover {
      color: #fff;
    }

    &:visited {
      outline: none;
    }
  }
}
```

With Nesting also comes the ability to nest properties. This allows us to create easier to read and reusable properties.

```scss
// create the declaration
.headlines {

  // define the nested property
  font: {
    family: Arial, sans-serif;
    size: 26em;
    weight: bold;
  }
}
```

---

<a name="operators"></a>
### Operators

In Sass we are allowed to run operators inside our `.scss` files. This allows for functionality in the stylesheets, making our designs more fluid and responsive. With Sass the basic mathematical functions are supported (e.g. Addition +, Subtraction -, Multiplication \*, Division /, and Modulo %). But in order to work with operators you must only use numbers and not suffixes like `em`, `px`, etc.

```scss
// Run some example operations
p {
  font: 10px/8px;             // Plain CSS, no division
  $width: 1000px;
  width: $width/2;            // Uses a variable, does division
  width: round(1.5)/2;        // Uses a function, does division
  height: (500px/2);          // Uses parentheses, does division
  margin-left: 5px + 8px/2px; // Uses +, does division
  font: (italic bold 10px/8px); // In a list, parentheses don't count
}

// It is also possible to utilize variables with a plain CSS / by using the #{$variable} syntax
p {
  $font-size: 20px;
  $line-height: 46px;
  font: #{$font-size}/#{$line-height};
}
```

Operations can also be used for other situations like colors, strings, and booleans. Boolean operators would be `or`, `and`, and `not` and only work with booleans.

```scss
// Color Examples
p {
  color: #010203 + #040506;
}

p {
  color: #010203 * 2;
}

// Colors with an alpha chanel must have the same alpha value in order for them to be used in arithmetic.
p {
  color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);
}

// String Examples
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}

p {
  margin: 3px + 4px auto;
}
```

---

<a name="funcs"></a>
### Functions

Sass comes packed with a plethora of functions that facilitate complex tasks. These functions are called using the normal CSS function syntax. It is also possible to call these with key arguments.

```scss
// Displaying an example of basic function syntax
p {
  color: hsl(0, 100%, 50%);
}

// Example of functions called with key arguments.
p {
  color: hsl($hue: 0, $saturation: 100%, $lightness: 50%);
}
```

For more information on all the functions that come built into Sass, refer to the **[Function Module](http://sass-lang.com/documentation/Sass/Script/Functions.html)** page of the Sass Documentation.

---

<a name="funcDirective"></a>
### Function Directives

Apart from giving us a large amount of Functions at our disposal, Sass gives us the ability to create our own. Function Directives make coding stylesheets more versatile. Creating and using these Function Directives is very similar to using Mixins.

```scss
// define a function directive for use with variables
@function columnWidth($width, $columns, $margin){
    @return ($width / $columns) - ($margin * 2);
}

// Now the function directive that was created can be utilized throughout the code.
$width: 100%;
$columns: 2;
$margin: 5%;

.container {
  width: $width;
}

.column {
  background: #1abc9c;
  height: 200px;
  display: block;
  float: left;
  // functions can accept set variables as argument, just like in scripting languages
  width: getColumnWidth($width,$columns, $margin);
  margin: 0 $margin;
}
```

---

<a name="mixins"></a>
### Mixins

Mixins are a very useful directive that allows us to define styles that can be re-used throughout the stylesheet. They function similarly to `@extend`, but with the added ability to supply and interpret arguments to the mixin. To define a mixin in Sass use the `@mixin` directive and to utilize them it use `@include`.

```scss
// Define a headline mixin for section headlines
@mixin headline {
  padding: 5px;
  color: #225378;
  font: {
    size: 34px;
    style: italic;
    weight: bold;
    family: Verdana, sans-serif;
  }
}

// then simply use @include to use it
.cta {
  width: 100%;

  p {
    @include headline;
  }
}

// Mixins also allow the use of other mixins inside them
// First make sure that all the mixins being used are declared
@mixin blue_btn_color {
  background-color: #225378;
  color: #fff;
}
@mixin blue_btn_dimensions {
  width: 50%;
  padding: 10px;
  margin: 0 5px;
}

// Then simply @include them in the compiled mixin
@mixin blue_btn {
  @include blue_btn_color;
  @include blue_btn_dimensions;
}
```

Mixins also allow the use of arguments to define what the properties will be. This is useful when looking to use the same styling for different sections, but slightly changing them.

```scss
// Defining a @mixin with arguments
@mixin solid-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: solid;
  }
}

// Passing arguments to the @mixin
p { @include solid-border(blue, 1in); }
```

---

<a name="imports"></a>
### Imports

Imports allow the use of multiple `.scss` or `.sass` files by splitting up big stylesheets into smaller files, then importing them all into one `main.scss`. Importing is as easy as writing one line of code.

```scss
// In order to import any additional .scss or .sass files simply use the following syntax
@import "buttons.scss";
@import "links.scss";
@import "home.scss";

// Sass even allows you to import files without the use of the file extensions
@import "buttons";
@import "links";
@import "home";
```

---

<a name="extends"></a>
### Extends

Sass introduces an easy and quick way to share styles between different rules and selectors. `@extend` works perfectly to make code re-useable and less cluttered.

```scss
// To use @extend simply have an existing style you want to use
.alert {
  width: 30%;
  font: {
    size: 24px;
    family: Arial, sans-serif;
    weight: bold;
  }
}

// then reuse it with @extend
.alert_danger {
  @extends .alert;
  background-color: #9A2D25;
  color: #F06060;
}

// It can be reused as many times as needed
.alert_info {
  @extends .alert;
  background-color: #0077B5;
  color: #1DA1F2;
}

.alert_success {
  @extends .alert;
  background-color: #63903C;
  color: #C1E467;
}
```


<a name="resources"></a>
## Resources

#### Sass Information Sources
[wiki]: https://en.wikipedia.org/wiki/Sass_(stylesheet_language)

- [Sass Wikipedia][wiki]
- [What is Sass](http://www.creativebloq.com/web-design/what-is-sass-111517618)
- [Installing Sass](http://sass-lang.com/install)

#### Sass Features Sources

- [Sass-lang Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_)
- [Sass-lang Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)
- [sitepoint.com: Getting Started with Sass](https://www.sitepoint.com/getting-started-with-sass/)
- [hongkiat.com: Getting started with Sass](http://www.hongkiat.com/blog/getting-started-saas/)
- [scotch.io: Getting started with Sass](https://scotch.io/tutorials/getting-started-with-sass)
- [alistapart.com: Getting started with Sass](https://alistapart.com/article/getting-started-with-sass)

#### Sass Guidelines and Standards
[sassway]: http://thesassway.com/

- [Sass Guidelines](https://sass-guidelin.es/)
- [Sass Articles][sassway]
- [sitepoint.com: Sass Architecture](https://www.sitepoint.com/architecture-sass-project/)
