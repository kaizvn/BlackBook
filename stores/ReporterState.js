const SUBMIT_REPORTER = 'SUBMIT_REPORTER';
export const doSubmitReporter = message => ({
  type: SUBMIT_REPORTER,
  payload: message
});

export default {
  reporter: (state = {}, { type, payload }) => {
    if (type === SUBMIT_REPORTER) {
      const reporter = { id: payload };
      return reporter;
    }

    return state;
  }
};
