// MULTIPLE REDUCERS
const redux = require('redux');

// ACTIONS TYPES =================================
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_ADDED = 'CAKE_ADDED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_ADDED = 'ICECREAM_ADDED';

// ACTIONS CREATORS =================================
const orderCake = (quantity) => {
  return {
    type: CAKE_ORDERED,
    payload: quantity,
  };
};

const addCake = (quantity) => {
  return {
    type: CAKE_ADDED,
    payload: quantity,
  };
};

const orderIceCream = (quantity) => {
  return {
    type: ICECREAM_ORDERED,
    payload: quantity,
  };
};

const addIceCream = (quantity) => {
  return {
    type: ICECREAM_ADDED,
    payload: quantity,
  };
};

// REDUCERS =================================
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      };
    case ICECREAM_ADDED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

// STORE =================================
const rootStore = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = redux.createStore(rootStore);
console.log('INITIAL STATE', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(orderCake(2));
store.dispatch(orderCake(3));
store.dispatch(addCake(5));

store.dispatch(orderIceCream(8));
store.dispatch(orderIceCream(7));
store.dispatch(addIceCream(15));

unsubscribe();
