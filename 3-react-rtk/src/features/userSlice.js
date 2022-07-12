import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.email = action.payload.email;
    },
    logout: (state, action) => {
      state.name = '';
      state.age = '';
      state.email = '';
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
