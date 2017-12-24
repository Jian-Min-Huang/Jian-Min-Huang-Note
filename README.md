# :notebook: Jian-Min Huang Note
[![Build Status](https://travis-ci.org/Jian-Min-Huang/Jian-Min-Huang-Note.svg?branch=master)](https://travis-ci.org/Jian-Min-Huang/Jian-Min-Huang-Note)

> It is a web page which consist of Jian-Min Huang's personal note .
> Base on bootstrap template of https://github.com/BlackrockDigital/startbootstrap-sb-admin-2 .

## Requirements
* [Node.js][nodejs-page]
* [npm][npm-page] or [yarn][yarn-page]
* [Gulp.js][gulpjs-page]

## Project Structure
```
* build/                    build result
* content/                  notes content
* src/
  * html/                   html files
  * js/
     * es6/
       * dynamic-content.js generate by recursive-list.js
       * main.js            main logic of page
     * dynamic-content.js   es 5 version, translate by gulp babel task
     * main.js              es 5 version, translate by gulp babel task
     * recursive-list.js    generate dynamic-content.js from content/, trigger by gulpjs
  * css                     css files
* vendors                   3rd party libraries
```

## Build
```sh
$ npm install
$ npm run build
```

## Result
please visit [http://note.jianminhuang.cc][result-page]

## Author
Jian-Min Huang

## License
[MIT License][license-page]

Copyright (c) 2017 Jian-Min Huang

[:arrow_up: back to top][top-page]

[nodejs-page]: <https://nodejs.org>
[npm-page]: <https://www.npmjs.com>
[yarn-page]: <https://yarnpkg.com>
[gulpjs-page]: <https://gulpjs.com>
[result-page]: <http://note.jianminhuang.cc>
[license-page]: <https://github.com/Jian-Min-Huang/Jian-Min-Huang-Note/blob/master/LICENSE>
[top-page]: <https://github.com/Jian-Min-Huang/Jian-Min-Huang-Note/tree/master#notebook-jian-min-huang-note>