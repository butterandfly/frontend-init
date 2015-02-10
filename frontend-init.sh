#!/bin/bash

echo Building dir...
cp -r ~/Nowhere/frontend-init/project-egg/* ./

echo Init npm...
npm init

echo Install bower...
npm install --save-dev bower

echo Install gulp and gulp plugins...
npm install --save-dev gulp
npm install --save-dev gulp-concat
npm install --save-dev gulp-sass
npm install --save-dev gulp-util
npm install --save-dev gulp-rename
npm install --save-dev gulp-nunjucks-render
npm install --save-dev yargs

npm install --save-dev create-component

echo Bower init...
bower init

echo Done.
