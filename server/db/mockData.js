const { BOOMER_WARNING, BOOMER_DANGER, BOOMER_CLEANED } = require('./enums');

module.exports = {
	boomers: [
		{
			phone: '0981690658',
			address: '52 Huynh Van Banh',
			name: 'Nguyen Van Hai',
			amount: '1000000',
			evidenceIds: ['1'],
			avatar: '/avatar/1.jpg',
			status: BOOMER_WARNING
		},
		{
			phone: '0958186096',
			address: '62 Tan Thuan Tay',
			name: 'Tran Minh Tuan',
			amount: '210000',
			evidenceIds: ['2'],
			avatar: '/avatar/2.jpg',
			status: BOOMER_DANGER
		},
		{
			phone: '0960961858',
			address: '105 Tan Son Nhi',
			name: 'Nguyen Thi Nu',
			amount: '1150000',
			evidenceIds: ['3'],
			avatar: '/avatar/3.jpg',
			status: BOOMER_CLEANED
		},
		{
			phone: '0996185680',
			address: '279 Bui Thi Xuan',
			name: 'Mai Hoang Anh',
			amount: '325000',
			evidenceIds: ['4'],
			avatar: '/avatar/4.jpg',
			status: BOOMER_DANGER
		},
		{
			phone: '0918096856',
			address: '710 Huynh Tan Phat',
			name: 'Mai Dinh Chinh',
			amount: '565000',
			evidenceIds: ['5'],
			avatar: '/avatar/5.jpg',
			status: BOOMER_WARNING
		}
	],
	users: [
		{ phone: '0903005212', avatar: '/avatar/6.jpg' },
		{ phone: '0921250030', avatar: '/avatar/7.jpg' }
	],
	evidences: [
		{
			id: '1',
			photo: '/evidence/1.jpg',
			by: '0903005212',
			at: 1561207713130,
			description: 'This person order 10 milkteas but never show up'
		},
		{
			id: '2',
			photo: '/evidence/2.jpg',
			by: '0903005212',
			at: 1561201513130,
			description: 'This person order 2 cakes but never show up'
		},
		{
			id: '3',
			photo: '/evidence/3.jpg',
			by: '0903005212',
			at: 1561107713130,
			description: 'This person order 15 noodles but never show up'
		},
		{
			id: '4',
			photo: '/evidence/4.jpg',
			by: '0921250030',
			at: 1561007713130,
			description: 'This person order a laptop but never show up'
		},
		{
			id: '5',
			photo: '/evidence/5.jpg',
			by: '0921250030',
			at: 1560207713130,
			description: 'This person order a car but never show up'
		}
	]
};
