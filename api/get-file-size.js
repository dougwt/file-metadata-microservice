var formidable = require('formidable');

function get_uploaded_files() {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    return files;
  });
}

module.exports = (req, res) => {
  var files = get_uploaded_files();
  
  if (!files) {
    res.status(400).json({
      error: 400,
      message: 'Missing file attachment'
    });
    return;
  }

  res.json({ 'size': files });

  // res.end(`Hello from /api/get-file-size/ on Now 2.0!`);
  // res.end(JSON.stringify(req));
  // app.post('/get-file-size', upload.single('file'), autoReap, get_file_size);
};
