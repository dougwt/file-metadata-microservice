const express = require('express');
const path = require('path');
// const UrlController = require('./controllers/url_controller');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/new/*', UrlController.create);
// app.get('/:id', UrlController.redirect);

module.exports = app;
