// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the express.json() middleware to parse the request body
app.use(express.json());

// Create an array to store comments
let comments = [];

// Create a route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route to post comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
