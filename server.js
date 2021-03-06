const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');

const apiRouter = require('./api/api.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

app.use(errorhandler());

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});

module.exports = app;