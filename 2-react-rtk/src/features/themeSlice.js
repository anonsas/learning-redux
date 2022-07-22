import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: '',
  bgColor: '',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.color = action.payload.color;
      state.bgColor = action.payload.bgColor;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
