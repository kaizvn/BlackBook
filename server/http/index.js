const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { RouterAPI } = require('./router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use('/api', RouterAPI);

app.listen(4000, () => console.log('> HTTP Server is listening on port 4000'));

module.exports = app;
