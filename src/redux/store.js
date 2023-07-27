import { configureStore } from '@reduxjs/toolkit';
import MoviesSlice from './MoviesSlice';
import userReducer from './UsersSlice';

const store = configureStore({
  reducer: {
    movies: MoviesSlice,
    users: userReducer,
  },
});

export default store;
