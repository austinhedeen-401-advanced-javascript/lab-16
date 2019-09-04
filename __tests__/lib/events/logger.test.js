'use strict';

require('../../../lib/events/logger.js');
const emitter = require('../../../lib/events/event.js');

describe('logger', () => {

  it('', () => {
    emitter.emit('file-altered', 'filename');
  });

});
