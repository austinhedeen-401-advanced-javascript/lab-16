'use strict';

const mock = require('mock-fs');

const alterFile = require('../../lib/alter-file.js');

beforeAll(() => {
  mock({
    'some-file.txt': 'file content here'
  });
});

afterAll(() => {
  mock.restore();
});

describe('alterFile', () => {

  it('', () => {

  });

});
