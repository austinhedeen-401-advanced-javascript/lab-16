# lab-16


# LAB - 16

## Event Driven Applications

### Author: Austin Hedeen

### Links and Resources
* [submission PR](https://github.com/austinhedeen-401-advanced-javascript/lab-16/pull/1)
* [travis](https://travis-ci.com/austinhedeen-401-advanced-javascript/lab-16)

### Modules

#### `alter-file.js`
##### Exported Method
###### `alterFile(fileName) -> undefined`
Takes a filename and converts the file contents to uppercase.

#### `file-read.js`
##### Exported Method
###### `fileRead(fileName) -> Promise<Buffer>`
Wrapper of `fs.readFile` returning a promise containing the file contents.

#### `file-save.js`
##### Exported Method
###### `fileSave(fileName) -> Promise`
Wrapper of `fs.writeFile` returning a promise.

#### `uppercase.js`
##### Exported Method
###### `uppercase(Buffer) -> Buffer`
Converts a Buffer's string representation to uppercase.

#### Running the app
* `node app.js [filename]`
  
#### Tests
* `npm test`

#### UML
Link to an image of the UML for your application and response to events
