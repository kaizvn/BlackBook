const db = require('../index');
const { insertEvidence } = require('./evidence');
const { formatPhone, handleAvatar } = require('./utils');
const { BOOMER_WARNING } = require('../enums');

const Boomers = db.get('boomers');

module.exports = {
	Boomers,
	boomerExist: function({ phone }) {
		phone = formatPhone(phone);
		const boomer = Boomers.find({ phone }).value();

		return boomer ? true : false;
	},
	updateBoomer: function({ reporter, phone, evidencePhoto }) {
		const evidenceId = insertEvidence({ reporter, evidencePhoto }).id;
		const boomer = Boomers.find({ phone });
		boomer
			.get('evidenceIds')
			.push(evidenceId)
			.write();
	},
	insertBoomer: function({
		reporter,
		phone,
		evidencePhoto,
		avatarPhoto,
		...args
	}) {
		phone = formatPhone(phone);
		const newEvidence = insertEvidence({ reporter, evidencePhoto });
		const avatarId = handleAvatar(avatarPhoto);

		Boomers.push({
			...args,
			phone,
			evidenceIds: [newEvidence.id],
			avatar: `/avatar/${avatarId}.jpg`,
			status: BOOMER_WARNING
		}).write();
	}
};
