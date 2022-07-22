// PRACTICAL (NESTED) OBJECTS IN COMPANIES
// IMMER - HELPER LIBRARY (CREATES IMMUTABLE STATE)

const redux = require('redux');
const produce = require('immer').produce;

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const initialState = {
  name: 'Eddy',
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    // return {
    //   ...state,
    //   address: {
    //     ...state.address,
    //     street: action.payload,
    //   },
    // };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(updateStreet('446 Second St'));
unsubscribe();
