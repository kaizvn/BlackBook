const express = require('express');
const RouterAPI = express.Router();
const db = require('../db');
const { Boomers } = require('../db/models');

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

RouterAPI.post('/boomer', (req, res) => {
	const params = req.body;

	if (Boomers.boomerExist(params)) {
		Boomers.updateBoomer(params);
		return res.status(200).json({ status: 'updated', error: false });
	}

	Boomers.insertBoomer(params);
	return res.status(200).json({ status: 'inserted', error: false });
});

module.exports = {
	RouterAPI
};
