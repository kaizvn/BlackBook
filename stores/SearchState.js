export const SEARCH_ACTIONS = {
  SEARCHING: 'SEARCH_SEARCHING',
  COMPLETED: 'SEARCH_COMPLETED'
};

export const doSearching = message => ({
  type: SEARCH_ACTIONS.SEARCHING,
  payload: message
});

export const stopSearching = () => ({
  type: SEARCH_ACTIONS.COMPLETED
});

export default {
  isSearching: (state = false, { type }) => {
    if (type === SEARCH_ACTIONS.SEARCHING) {
      return true;
    }
    if (type === SEARCH_ACTIONS.COMPLETED) {
      return false;
    }
    return state;
  }
};
