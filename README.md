[![Build Status](https://travis-ci.org/Jian-Min-Huang/Jian-Min-Huang-Note.svg?branch=master)](https://travis-ci.org/Jian-Min-Huang/Jian-Min-Huang-Note)

> It is a web page which consist of Jian-Min Huang's personal note .
Base on template of https://github.com/BlackrockDigital/startbootstrap-sb-admin-2 .

## Requirements
* Node.js
* npm or yarn
* Gulp.js

## project structure
* build/                    build
* content/                  notes content
* src/
  * html/                   html files
  * js/
     * es6/
       * main.js            main logic of page
     * recursive-list.js    generate src/js/es6/dynamic-content.js from content/
  * css                     css files
* vendors                   3rd party libraries

## Setting
```sh
$ npm install
$ npm run build
```