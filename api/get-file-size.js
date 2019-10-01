var formidable = require('formidable');

function respond_with_error(code, message, res) {
  res.status(code).json({
    error: code,
    message
  });
}

module.exports = (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    if (err) {
      respond_with_error(500, 'Unable to upload file', res);
      return;
    }
    if (!files.file || files.file.size === 0) {
      respond_with_error(404, 'Missing file attachment', res);
      return;
    }

    res.json({ 'size': files.file.size });
  });
};
