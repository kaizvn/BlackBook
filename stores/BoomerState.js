import { SEARCH_ACTIONS } from './SearchState';
import { boomers } from '../mockData';
import { formatPhone } from '../utils';

export default {
  boomers: (state = [], { type, payload }) => {
    if (type === SEARCH_ACTIONS.SEARCHING) {
      return boomers.filter(
        ({ phone, name, address }) =>
          phone === formatPhone(payload) ||
          name.toLowerCase().includes(payload.toLowerCase()) ||
          address.toLowerCase().includes(payload.toLowerCase())
      );
    }

    return state;
  }
};
