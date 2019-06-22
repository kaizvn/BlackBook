import { combineReducers } from 'redux';

import BoomerState from './BoomerState';

export default combineReducers({
  isConnected: (state = false, { type }) => {
    if (type === 'SERVER_CONNECTED') {
      return true;
    }

    if (type === 'SERVER_DISCONNECTED') {
      return false;
    }

    return state;
  },
  ...BoomerState
});
