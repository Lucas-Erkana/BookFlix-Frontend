// create reservationSlice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
};

const reservationSlice = createSlice(
  {
    name: 'reservations',
    initialState,
    reducers: {
      setReservations(state, action) {
        state.reservations = action.payload;
      },
      addReservation(state, action) {
        state.reservations.push(action.payload);
      },
    },
  },
);

export const { setReservations, addReservation } = reservationSlice.actions;

export default reservationSlice.reducer;

const fetchReservations = () => async (dispatch) => {
  const response = await fetch('https://book-flix.onrender.com/api/v1/reservations');
  const data = await response.json();
  dispatch(setReservations(data));
};

const createReservation = (reservationData) => async (dispatch) => {
  const response = await fetch('https://book-flix.onrender.com/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservationData),
  });
  const data = await response.json();
  dispatch(addReservation(data));
};

const deleteReservation = (reservationId) => async (dispatch) => {
  await fetch(`https://book-flix.onrender.com/api/v1/reservations/${reservationId}`, {
    method: 'DELETE',
  });

  // Dispatch an action to indicate the successful deletion
  dispatch(fetchReservations());
};
export { fetchReservations, createReservation, deleteReservation };
