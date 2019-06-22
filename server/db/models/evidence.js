const db = require('../index');
const { handleEvidence } = require('./utils');

const Evidences = db.get('evidences');

module.exports = Evidences;
module.exports.insertEvidence = function({
	reporter,
	evidencePhoto,
	description
}) {
	const id = handleEvidence(evidencePhoto);
	const evidence = {
		id,
		photo: `/evidence/${id}.jpg`,
		by: reporter,
		at: Date.now(),
		description
	};
	Evidences.push(evidence).write();
	return evidence;
};
