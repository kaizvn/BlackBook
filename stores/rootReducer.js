import { combineReducers } from 'redux';

import BoomerState from './BoomerState';
import ReporterState from './ReporterState';
import SearchState from './SearchState';

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
  ...BoomerState,
  ...SearchState,
  ...ReporterState
});
