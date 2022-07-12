// ASYNC ACTIONS

const redux = require('redux');
const thunk = require('redux-thunk').default;
const axios = require('axios');
const applyMiddleware = redux.applyMiddleware;

// Application State ===========================
const initialState = {
  loading: false,
  data: [],
  error: '',
};
// loading - Display a loading spinner in a component
// data - List of users
// error - Display error to the user.

// Action Types ===========================
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// Action Creators ===========================
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (errorMessage) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: errorMessage,
  };
};

// Reducers ===========================
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Async Actions ===========================
// this is possible because of redux-thunk middleware
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // response.data is the users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

// Store ===========================
const store = redux.createStore(reducer, applyMiddleware(thunk));
console.log('Initial State', store.getState());

store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
