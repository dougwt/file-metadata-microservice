var formidable = require('formidable');

function ensure_file_uploaded(files) {
  if (!files) {
    res.status(400).json({
      error: 400,
      message: 'Missing file attachment'
    });
    return;
  }
}

module.exports = (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    ensure_file_uploaded(files)
    res.send(files);
  });
  
  
  // res.json({ 'size': files });

  // res.end(`Hello from /api/get-file-size/ on Now 2.0!`);
  // res.end(JSON.stringify(req));
  // app.post('/get-file-size', upload.single('file'), autoReap, get_file_size);
};
