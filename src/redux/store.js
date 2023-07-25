import { configureStore } from '@reduxjs/toolkit';
import MoviesSlice from './MoviesSlice';

const store = configureStore({
  reducer: {
    movies: MoviesSlice,
  },
});

export default store;
