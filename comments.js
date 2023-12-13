// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse data from POST request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use comments router
const commentsRouter = require('./comments.js');
app.use('/comments', commentsRouter);

// Start web server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});