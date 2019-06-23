import { SEARCH_ACTIONS } from './SearchState';

export const WARNING = 1;
export const DANGER = 2;
export const REGRETTED = 3;

const boomers = [
  {
    phone: '0909000144',
    address: '123 ABC, Phu Thanh',
    name: 'Nguyen Van A',
    amount: 1000000,
    evidents: [['asdsdsadad.img', '../static/boat.jpg'], '../static/boat.jpg'],
    avatar: '../static/boat.jpg',
    status: WARNING
  },
  {
    phone: '0909000144',
    address: '123 ABC, Phu Thanh',
    name: 'Vo Van B',
    amount: 1000000,
    evidents: ['asdsdsadad.img', '../static/boat.jpg'],
    avatar: 'nva.img',
    status: DANGER
  },
  {
    phone: '0909000144',
    address: '123 ABC, Ho Chi Minh',
    name: 'Tran Thi C',
    amount: 1000000,
    evidents: ['asdsdsadad.img', '../static/boat.jpg'],
    avatar: 'nva.img',
    status: REGRETTED
  },
  {
    phone: '0909000144',
    address: '123 ABC, Nguyen Chi Thanh',
    name: 'Truong Tan D',
    amount: 1000000,
    evidents: ['asdsdsadad.img', '../static/boat.jpg'],
    avatar: 'nva.img',
    status: DANGER
  },
  {
    phone: '0909000144',
    address: '123 ABC, Tran Phu',
    name: 'Nguyen Van A',
    amount: 1000000,
    evidents: ['asdsdsadad.img', '../static/boat.jpg'],
    avatar: 'nva.img',
    status: DANGER
  }
];

export default {
  boomers: (state = [], { type, payload }) => {
    if (type === SEARCH_ACTIONS.SEARCHING) {
      return payload === 'hello' ? boomers : [];
    }

    return state;
  }
};
