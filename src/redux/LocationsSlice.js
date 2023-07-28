import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: [],
};

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations(state, action) {
      state.locations = action.payload;
    },
  },
});

export const { setLocations } = locationSlice.actions;

export default locationSlice.reducer;

const fetchLocations = () => async (dispatch) => {
  const response = await fetch('https://book-flix.onrender.com/api/v1/locations');
  const data = await response.json();
  dispatch(setLocations(data));
};

export { fetchLocations };
