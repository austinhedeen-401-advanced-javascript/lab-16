'use strict';

const emitter = require('./events/event.js');

const fileRead = require('./file-read.js');
const fileSave = require('./file-save.js');
const uppercase = require('./uppercase.js');


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
