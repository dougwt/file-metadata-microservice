module.exports = {
  get_file_size(req, res, next) {

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
};
