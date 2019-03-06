const express = require('express');

const app = express();
const PORT = 3000;

// 1) Create Routes

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/movie/:title', (req, res) => {
  res.send(`My favorite movie is ${req.params.title}`);
});

// 2) Start server on port 3000
app.listen(PORT, () => console.log(`Server listening on port:${PORT}`));

module.exports = app;
