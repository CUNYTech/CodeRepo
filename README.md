# CodeRef

![Screen Shot 2017-10-17 at 3.38.27 PM](/Users/alex/Desktop/Screen Shot 2017-10-17 at 3.38.27 PM.png)

CodeRef or (CodeReference) is a MEAN Stack application built to help users find useful information about coding keywords. 

**Current supported languages:**

- HTML

To set up the **Development Enviroment** please follow these instruction. You'll only need to do this once.

**<u>If you have these downloaded you can skip these steps.</u>**

------

### You need Node.js and NPM to run the application. 

- https://nodejs.org/en/download/current/

### Install angular-cli globally

This will allow you to use angular commands like `ng serve` or `ng generate component [...]`

```bash
npm install -g @angular/cli
```



### Install [nodemon](https://nodemon.io/)

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using [npm](https://npmjs.org/package/nodemon).

Just use `nodemon` instead of `node` to run your code, and now your process will automatically restart when your code changes. To install, get [node.js](https://nodejs.org/), then from your terminal run:

```shell
npm install -g nodemon
```



### (Optional) Download MongoDB

This app currently runs mlab as the database but you can download a local MongoDB for offline use or debugging purposes.

https://www.mongodb.com/download-center#community

### Download the dev dependecies

There are two package.json in the project, one in the root folder for the backend dependencies and one inside angular-src folder. You need to install these dependencies for the application to run and compile correctly.

1. Make sure you are in the root directory of the project! and run this command from there

   1. `npm install`

2. then cd into angular-src to install the front-end dependencies

   1. `cd angular-src`
   2. `npm install`

3. You know you successfully install the dependencies if you have a `node_modules` folder in the root directory and one inside the angular-src directory.

   ![app](/Users/alex/Desktop/app.png)

   ​

## Do this <u>**EVERY TIME**</u> you want to run the development server. 

You need to do this everytime for the app to run properly.



- In the root folder run `nodemon` you should get a message like this.

![Screen Shot 2017-10-17 at 3.30.49 PM](/Users/alex/Desktop/Screen Shot 2017-10-17 at 3.30.49 PM.png)

- Open up a **new terminal** and cd into angular-src.
  - `cd angular-src`
  - `ng serve`

![Screen Shot 2017-10-17 at 3.33.14 PM](/Users/alex/Desktop/Screen Shot 2017-10-17 at 3.33.14 PM.png)

## Issues

### Cant connect to the database?

Go to the `config` folder and open up database.js

If you do not have a local mongoDB make sure the mlab database is not commented out. 

**You can only have one commented at a time, switch if you need to use the local db or mlab.**

![Screen Shot 2017-10-17 at 3.37.40 PM](/Users/alex/Desktop/Screen Shot 2017-10-17 at 3.37.40 PM.png)