'use strict';

const mock = require('mock-fs');

const fileSave = require('../../lib/file-save.js');

beforeAll(() => {
  mock({
    'some-file.txt': 'file content here'
  });
});

afterAll(() => {
  mock.restore();
});

describe('fileSave', () => {

  it('', () => {

  });

});
