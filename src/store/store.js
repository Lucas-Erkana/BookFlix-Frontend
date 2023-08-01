import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './MoviesSlice';
import reservationReducer from './ReservationsSlice';
import locationReducer from './LocationsSlice';
import userReducer from './UsersSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    reservations: reservationReducer,
    locations: locationReducer,
    users: userReducer,
  },
});

export default store;
