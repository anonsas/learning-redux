const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'icecream',
  initialState: initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCreams -= action.payload;
    },
    added: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
