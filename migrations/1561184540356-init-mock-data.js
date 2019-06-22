module.exports.up = function(next) {
	const boomers = [
		{
			phone: '0981690658',
			address: '52 Huynh Van Banh',
			name: 'Nguyen Van Boom',
			amount: '1000000',
			evidence: '/',
			avatar: 'nva.img',
			status: DANGER
		}
	];
	next();
};

module.exports.down = function(next) {
	next();
};
