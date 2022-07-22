const redux = require('redux');
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = 'CAKE ORDERED';
const CAKE_ADDED = 'CAKE_ADDED';

function orderCake(quantity = 1) {
  return {
    type: CAKE_ORDERED,
    payload: quantity,
  };
}

function addCake(quantity = 1) {
  return {
    type: CAKE_ADDED,
    payload: quantity,
  };
}

const initialState = {
  numOfCakes: 10,
};

// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_ADDED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

// store.dispatch(orderCake(2));
// store.dispatch(orderCake(3));
// store.dispatch(orderCake(2));
// store.dispatch(addCake(7));

const action = bindActionCreators({ orderCake, addCake }, store.dispatch);
action.orderCake(2);
action.orderCake(3);
action.addCake(5);

unsubscribe();
