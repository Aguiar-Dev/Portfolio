*[back to root directory](../../../)*

# SASS Research and Examples

## Table of Contents

- [Introduction](#intro)
- [What is Sass?](#whatIsSass)
- [Why use Sass?](#whySass)
- [Setting Up Sass](#settingUp)
  - [Installing Sass](#install)
  - [Sass Applications](#applications)
  - [Sass Folder Structure](#folderStructure)
- [SASS Features](#sassFeatures)
  - [Variables](#vars)
  - [Nesting](#nests)
  - [Operators](#operators)
  - [Functions](#funcs)
  - [Function Directives](#funcDirective)
  - [Mixins](#mixins)
  - [Imports](#imports)
  - [Extend](#extends)
  - [Placeholders](#placeholders)  
- [Resources](#resources)

<a name="intro"></a>
## Introduction

This project is a Overview of the basic usage of SASS and how to implement it. The purpose of this project is to gain experience in SASS and its multiple uses. Throughout the documentation you will find basics on SASS and examples on how to use it. Included in this research is also a custom project that I implemented using only HTML5, CSS3, and SASS in order to test out the material that I research. I will add instructions on how to clone the repository to view the example webpage.

At the end of the documentation you can find all the resources used for this research project and any tools that were used with SASS. Like always I utilize redacted information from multiple websites and articles so I will try my best to document these in the Resources section of the documentation. Thanks for taking the time to view my SASS Research project, hope you enjoyed it and learned something new.

<a name="whatIsSass"></a>
## What is SASS?

SASS, or Syntactically Awesome Style Sheets, is a CSS preprocessor which allows developers to write stylesheets in a more convenient way and then compiles it into CSS. SASS allows developers to use features such as variables, nesting, functions, and more allowing faster creation and modularity in stylesheets. With SASS stylesheet creation is faster, more organized, and more modular than vanilla CSS.

It was initially designed by Hampton Catlin and developed by Natalie Weizenbaum, then continued as SassScript by Weizenbaum and Chris Eppstein. Because of this Sass consists of two different syntaxes, the original '.sass' which used indentation to separate code blocks and newline chars to separate rules. Then there is the new and most commonly used syntax '.scss', which uses braces to denote code blocks and semicolons to separate lines within a code block.

<a name="whySass"></a>
## Why use SASS?

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
## SASS Features


<a name="vars"></a>
### Variables


<a name="nests"></a>
### Nesting


<a name="operators"></a>
### Operators


<a name="funcs"></a>
### Functions


<a name="funcDirective"></a>
### Function Directives


<a name="mixins"></a>
### Mixins


<a name="imports"></a>
### Imports


<a name="extends"></a>
### Extends


<a name="placeholders"></a>
### Placeholders


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
