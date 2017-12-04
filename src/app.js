const express = require('express');
const path = require('path');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: './tmp/' });
var autoReap  = require('multer-autoreap');

const FormController = require('./controllers/form_controller');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.post('/get-file-size', upload.single('file'), autoReap, FormController.get_file_size);

module.exports = app;
