export const WARNING = 1;
export const DANGER = 2;
export const REGRETTED = 3;
export const SEARCH_BOOMER = 'SEARCH_BOOMER';
const boomers = [
  {
    phone: '0909000144',
    address: '123 ABC, Phu Thanh',
    name: 'Nguyen Van A',
    amount: 1000000,
    evident: 'asdsdsadad.img',
    avatar: 'nva.img',
    status: WARNING
  },
  {
    phone: '0909000144',
    address: '123 ABC, Phu Thanh',
    name: 'Vo Van B',
    amount: 1000000,
    evident: 'asdsdsadad.img',
    avatar: 'nva.img',
    status: DANGER
  },
  {
    phone: '0909000144',
    address: '123 ABC, Ho Chi Minh',
    name: 'Tran Thi C',
    amount: 1000000,
    evident: 'asdsdsadad.img',
    avatar: 'nva.img',
    status: REGRETTED
  },
  {
    phone: '0909000144',
    address: '123 ABC, Nguyen Chi Thanh',
    name: 'Truong Tan D',
    amount: 1000000,
    evident: 'asdsdsadad.img',
    avatar: 'nva.img',
    status: DANGER
  },
  {
    phone: '0909000144',
    address: '123 ABC, Tran Phu',
    name: 'Nguyen Van A',
    amount: 1000000,
    evident: 'asdsdsadad.img',
    avatar: 'nva.img',
    status: DANGER
  }
];

export default {
  boomers: (state = boomers, { type }) => {
    if (type === SEARCH_BOOMER) {
    }
    return state;
  }
};
