const db = require('../server/db');
const { boomers, evidences, users } = require('../server/db/mockData');

module.exports.up = function(next) {
	db.defaults({ boomers: boomers, evidences: evidences, users: users }).write();
	next();
};

module.exports.down = function(next) {
	db.setState({}).write();
	next();
};
