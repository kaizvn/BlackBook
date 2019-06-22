const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { RouterAPI } = require('./router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use('/api', RouterAPI);

app.listen(8010, () =>
	console.log('> HTTP Server started successfully on port 8010')
);
