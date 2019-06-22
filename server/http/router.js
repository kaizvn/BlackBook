const express = require('express');
const RouterAPI = express.Router();
const db = require('../db');

RouterAPI.get('/boomer', (req, res) => {
	const query = req.query.q;
	const results = db
		.get('boomers')
		.filter(
			({ name, address, phone }) =>
				phone === query || name.includes(query) || address.includes(query)
		)
		.value();

	return res.status(200).json(results);
});

module.exports = {
	RouterAPI
};
