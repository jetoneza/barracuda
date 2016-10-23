import { CALL_API } from 'redux-api-middleware';

// ------------------------------------
// Constants
// ------------------------------------
export const CONNECT = 'brcd:connect';
export const CONNECT_SUCCESS = 'brcd:connect_success';
export const CONNECT_FAIL = 'brcd:connect_fail';

// Sample function for API request
export function connectApi() {
  return {
    [CALL_API]: {
      endpoint: '/api/test',
      method: 'GET',
      types: [CONNECT, CONNECT_SUCCESS, CONNECT_FAIL],
    },
  };
};

export const actions = {
  connectApi,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CONNECT]: state => ({
    ...state,
    loadingConnect: true,
  }),
  [CONNECT_SUCCESS]: (state, action) => ({
    ...state,
    connect: action.payload,
    loadingConnect: false,
  }),
  [CONNECT_FAIL]: (state, action) => ({
    ...state,
    connect: null,
    connectError: action.payload,
    loadingConnect: false,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loadingConnect: false,
  connect: null,
};
export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
