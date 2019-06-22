const db = require('../index');
const { insertEvidence } = require('./evidence');
const { formatPhone, handleAvatar } = require('./utils');
const { BOOMER_WARNING } = require('../enums');

const Boomers = db.get('boomers');

module.exports = Boomers;
module.exports.boomerExist = function({ phone }) {
	phone = formatPhone(phone);
	const boomer = Boomers.find({ phone }).value();

	return boomer ? true : false;
};
module.exports.updateBoomer = function({
	reporter,
	phone,
	evidencePhoto,
	description
}) {
	const evidenceId = insertEvidence({ reporter, evidencePhoto, description })
		.id;
	const boomer = Boomers.find({ phone });
	boomer
		.get('evidenceIds')
		.push(evidenceId)
		.write();
};
module.exports.insertBoomer = function({
	reporter,
	phone,
	evidencePhoto,
	avatarPhoto,
	description,
	...args
}) {
	phone = formatPhone(phone);
	const newEvidence = insertEvidence({ reporter, evidencePhoto, description });
	const avatarId = handleAvatar(avatarPhoto);

	Boomers.push({
		...args,
		phone,
		evidenceIds: [newEvidence.id],
		avatar: `/avatar/${avatarId}.jpg`,
		status: BOOMER_WARNING
	}).write();
};
