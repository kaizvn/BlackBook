const fs = require('fs');
const path = require('path');
const shortid = require('shortid');

module.exports = {
	formatPhone: function(phone) {
		phone = phone.toString ? phone.toString() : phone;
		if (phone.substr(0, 1) !== '0') {
			return '0' + phone;
		}
		return phone;
	},
	handleEvidence: function(base64) {
		const evidenceId = shortid();
		const evidencePath = path.join(
			`${__dirname}/../../http/public/evidence/${evidenceId}.jpg`
		);
		fs.writeFileSync(evidencePath, base64, 'base64');
		return evidenceId;
	},
	handleAvatar: function(base64) {
		const avatarId = shortid();
		const avatarPath = path.join(
			`${__dirname}/../../http/public/avatar/${avatarId}.jpg`
		);
		fs.writeFileSync(avatarPath, base64, 'base64');
		return avatarId;
	}
};
