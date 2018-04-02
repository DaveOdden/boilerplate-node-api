#Boilerplate Node API

**Overview**

This repository is intended to serve as a starter package for projects that require a RESTful service in NodeJS. If you'd like to spin up a new project and don't want to manually setup the environment, this is for you.

Prerequisites:
1. node installed
2. access to terminal

**Installation**

1. In the command line, `cd` to the location you want your project to live.
2. execute `git clone https://github.com/DaveOdden/boilerplateNodeAPI` to pull this package down.

**Usage**

1. `cd` into "boilerplateNodeAPI"

____

**Steps taken to generate this boilerplate project**

1. Create a new project folder locally.
2. `cd` into that folder via the command line.
3. run `npm init -y` to quickly generate a package.json file with defaults.
4. install nodemon with `npm install --save-dev nodemon`.
5. install express with `npm install express --save`.
6. create `server.js` file with `touch server.js`.
7. create the api folder with `mkdir api`.
8. create model, route, and controller files under `./api/` with `touch api/controllers/apiController.js api/models/apiModel.js api/routes/apiRoutes.js`.