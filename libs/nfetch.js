import { flow, join, map, toPairs, trim } from 'lodash/fp';

import { getHeaders } from '../libs';

const objectToQuery = flow(
  toPairs,
  map(val => `${val[0]})=${val[1]}`),
  join('&'),
  trim
);

export const nfetch = ({ endpoint, method = 'POST' }) => (
  variables = {},
  opts = {}
) => {
  if (method === 'GET') {
    const query = objectToQuery(variables);
    return {
      endpoint: query ? endpoint + '?' + query : endpoint,
      method,
      headers: getHeaders(opts.headers)
    };
  } else {
    return {
      endpoint,
      method,
      headers: getHeaders(opts.headers),
      body: JSON.stringify(variables)
    };
  }
};
