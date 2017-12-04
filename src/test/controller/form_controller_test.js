const assert = require('assert');
const request = require('supertest');
const fs = require('fs');
const app = require('../../app');

describe('Form controller', () => {

  it('POST to /get-file-size without a file upload returns an error', (done) => {
    request(app)
      .post('/get-file-size')
      .end(function(err, response) {
          assert(response.status === 400);
          assert(response.body.message === 'Missing file attachment');
          done();
      });
  });

  it('POST to /get-file-size with a file upload returns the size in bytes', (done) => {
    const file = './src/public/index.html';
    let size;
    fs.stat(file, function(err, stats) {
      assert(err === null);
      size = stats.size;
    });

    request(app)
      .post('/get-file-size')
      .attach('file', file)
      .end(function(err, response) {
        assert(response.status === 200);
        assert(response.body.size === size);
        done();
      });
  });

  it('POST to /get-file-size with a different file upload returns the size in bytes', (done) => {
    const file = './src/public/style.css';
    let size;
    fs.stat(file, function(err, stats) {
      assert(err === null);
      size = stats.size;
    });

    request(app)
      .post('/get-file-size')
      .attach('file', file)
      .end(function(err, response) {
        assert(response.status === 200);
        assert(response.body.size === size);
        done();
      });
  });

});
