import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import themeReducer from '../features/themeSlice';
import userListReducer from '../features/userListSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    userList: userListReducer,
  },
});

export default store;
