## Front End Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## General Instructions

This is a simple proof of concept boilerplate that can be used to understand how creating API requests works, this will be paired
with the ruby on rails server that is hosting the backend actions.

# Key Changes

We have established a `proxy.conf.js` file which tells the front end server where to direct its HTTP requests. This acts
as a linkage between our two servers and if you run into issues where you can't get communication, more than likely the frontend 
was not started correctly. If `npm start` is not working for whatever reason you can run `ng serve --proxy-config proxy.conf.json` 
once we move out of dev and into production this file will need to be updated to reflect the IP the server sits on.

#Files to focus in on
`app.component.html` is the location where your HTML code will be placed and often you will see a chunk of CSS above, that is because you can
place it there if you choose to not use SCSS which is a style sheet language that gets compiled to CSS on runtime.  

`app.component.ts` is the primary location where operations will be occuring, think of it like a main class file. This is where you will
call functions from your other imported '.ts' files.

`Response.ts` is currently just a file used for defining what types of JSON responses you are expecting, this will be used as a custom typing for requests but
for each specific request type you want to write your own.


## Development server

Run `npm start` for a dev server (this is generally ng serve but we need it to boot with proxy.conf.js look to package.json for start defs). Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

