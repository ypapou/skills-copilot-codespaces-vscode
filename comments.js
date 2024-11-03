// Create web server
var express = require('express');
var app = express();

// Use the body-parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a comments array
var comments = [];

// Get comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Post comments
app.post('/comments', function(req, res) {
  if (req.body.comment) {
    comments.push(req.body.comment);
    res.status(201).send(req.body.comment);
  } else {
    res.status(400).send('Comment is required');
  }
});

// Start the server
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});