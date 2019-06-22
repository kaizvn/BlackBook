const { BOOMER_WARNING, BOOMER_DANGER, BOOMER_CLEANED } = require('./enums');

module.exports = {
	boomers: [
		{
			phone: '0981690658',
			address: '52 Huynh Van Banh',
			name: 'Nguyen Van Hai',
			amount: '1000000',
			evidence: '/evidence/1.jpg',
			avatar: '/avatar/1.jpg',
			status: BOOMER_WARNING
		},
		{
			phone: '0958186096',
			address: '62 Tan Thuan Tay',
			name: 'Tran Minh Tuan',
			amount: '210000',
			evidence: '/evidence/2.jpg',
			avatar: '/avatar/2.jpg',
			status: BOOMER_DANGER
		},
		{
			phone: '0960961858',
			address: '105 Tan Son Nhi',
			name: 'Nguyen Thi Nu',
			amount: '1150000',
			evidence: '/evidence/3.jpg',
			avatar: '/avatar/3.jpg',
			status: BOOMER_CLEANED
		},
		{
			phone: '0996185680',
			address: '279 Bui Thi Xuan',
			name: 'Mai Hoang Anh',
			amount: '325000',
			evidence: '/evidence/4.jpg',
			avatar: '/avatar/4.jpg',
			status: BOOMER_DANGER
		},
		{
			phone: '0918096856',
			address: '710 Huynh Tan Phat',
			name: 'Mai Dinh Chinh',
			amount: '565000',
			evidence: '/evidence/5.jpg',
			avatar: '/avatar/5.jpg',
			status: BOOMER_WARNING
		}
	]
};
