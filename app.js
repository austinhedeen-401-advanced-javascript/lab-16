'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const emitter = require('./event.js');
require('./logger.js');

/**
 * Reads data from a file asynchronously
 *
 * @param {string} fileName
 * @returns {Promise<Buffer>} - Promise object representing the file contents
 */
const fileRead = fileName => readFile(fileName);

/**
 * Converts a Buffer representing a string to uppercase
 *
 * @param {Buffer} data - Buffer representing a string
 * @returns {Buffer} - The uppercase representation of the data
 */
const uppercase = data => Buffer.from(data.toString().toUpperCase());

/**
 * Writes data to a file asynchronously
 *
 * @param {string} fileName
 * @param {Buffer} data - Buffer representing a string
 * @returns {Promise}
 */
const fileSave = (fileName, data) => writeFile(fileName, data);

/**
 * Alters the given file by converting it to uppercase
 *
 * @param {string} fileName
 * @fires 'file-altered'
 * @fires 'file-error'
 */
const alterFile = fileName => {

  fileRead(fileName)
    .then(uppercase)
    .then(data => fileSave(fileName, data))
    .then(() => emitter.emit('file-altered', fileName))
    .catch(error => emitter.emit('file-error', error));

};


// CLI Entry

let file = process.argv.slice(2).shift();

if (file) {
  alterFile(file);
} else {
  emitter.emit('file-error', Error('Expected argument: [filename]'));
}
