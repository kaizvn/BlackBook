const db = require('../server/db');
const boomers = require('../server/db/mockData');

module.exports.up = function(next) {
	db.defaults({ boomers: [], users: [] }).write();
	db.set('boomers', boomers).write();
	next();
};

module.exports.down = function(next) {
	db.setState({}).write();
	next();
};
	