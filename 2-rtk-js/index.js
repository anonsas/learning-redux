const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated State', store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered(5));
// store.dispatch(cakeActions.added(3));

// store.dispatch(iceCreamActions.ordered(11));
// store.dispatch(iceCreamActions.added(9));

// unsubscribe();
