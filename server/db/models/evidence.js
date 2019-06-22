const db = require('../index');
const { handleEvidence } = require('./utils');

const Evidences = db.get('evidences');

module.exports = {
	Evidences,
	insertEvidence: function({ reporter, evidencePhoto }) {
		const id = handleEvidence(evidencePhoto);
		const evidence = {
			id,
			photo: `/evidence/${id}.jpg`,
			by: reporter,
			at: Date.now()
		};
		Evidences.push(evidence).write();
		return evidence;
	}
};
