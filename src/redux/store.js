import { configureStore } from '@reduxjs/toolkit';
import MoviesSlice from './MoviesSlice';
// eslint-disable-next-line import/extensions
import userReducer from './UsersSlice';

const store = configureStore({
  reducer: {
    movies: MoviesSlice,
    users: userReducer,
  },
});

export default store;
