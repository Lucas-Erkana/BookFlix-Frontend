import { configureStore } from '@reduxjs/toolkit';
import MoviesSlice from './MoviesSlice';
import userReducer from './UsersSlice';
import LocationSlice from './LocationsSlice';
import Reservations from './ReservationsSlice';

const store = configureStore({
  reducer: {
    movies: MoviesSlice,
    users: userReducer,
    locations: LocationSlice,
    reservations: Reservations,
  },
});

export default store;
