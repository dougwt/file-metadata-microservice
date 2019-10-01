// const multer  = require('multer');
// const upload = multer({ dest: './tmp/' });
// var autoReap  = require('multer-autoreap');

function get_file_size(req, res, next) {
  if (!req.file) {
    res.status(400).json({
      error: 400,
      message: 'Missing file attachment'
    });
    return;
  }

  // console.log(req.file);
  res.send({ size: req.file.size });
}

module.exports = (req, res) => {
  // res.end(`Hello from /api/get-file-size/ on Now 2.0!`);
  res.end(JSON.stringify(req));
  // app.post('/get-file-size', upload.single('file'), autoReap, get_file_size);
};
