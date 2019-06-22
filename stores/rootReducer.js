import { combineReducers } from 'redux';

export default combineReducers({
  isConnected: (state = false, { type }) => {
    if (type === 'SERVER_CONNECTED') {
      return true;
    }

    if (type === 'SERVER_DISCONNECTED') {
      return false;
    }

    return state;
  }
});
