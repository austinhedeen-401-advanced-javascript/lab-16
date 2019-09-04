'use strict';

require('./lib/events/logger.js');
const emitter = require('./lib/events/event.js');

const alterFile = require('./lib/alter-file.js');

// CLI Entry

let file = process.argv.slice(2).shift();

if (file) {
  alterFile(file);
} else {
  emitter.emit('file-error', Error('Expected argument: [filename]'));
}
