const express = require('express');
const RouterAPI = express.Router();
const { Boomers, Evidences } = require('../db/models');
const { EVIDENCE_BEING_VERIFIED } = require('../db/enums');

RouterAPI.get('/boomer', (req, res) => {
	const query = req.query.q;
	const results = Boomers.filter(
		({ name, address, phone }) =>
			phone === query || name.includes(query) || address.includes(query)
	).value();

	return res.status(200).json(results);
});

RouterAPI.get('/boomer/:phone', (req, res) => {
	const phone = req.params.phone;
	const result = Boomers.find({ phone }).value();

	return res.status(200).json(result);
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

RouterAPI.get('/evidence/:id', (req, res) => {
	const { id } = req.params;
	const result = Evidences.find({ id }).value();

	return res.status(200).json(result);
});

RouterAPI.put('/evidence/:id', (req, res) => {
	const { currentUser } = req.header;
	const { id } = req.params;
	const { proofPhoto } = req.body;
	const evidence = Evidences.find({ id }).value();

	if (currentUser === evidence.reporter) {
		Evidences.requestLiftCurse({ id, proofPhoto });
		return res.status(200).json({ error: false, status: 'curse lifted' });
	}
	Evidences.reportScam({ id, proofPhoto });
	return res.status(200).json({ error: false, status: 'reported' });
});

module.exports = {
	RouterAPI
};
