import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const moviesSlice = createSlice(
  {
    name: 'movies',
    initialState,
    reducers: {
      setMovies(state, action) {
        state.movies = action.payload;
      },
    },
  },
);

export const { setMovies } = moviesSlice.actions;

const fetchMovies = () => async (dispatch) => {
  const response = await fetch('https://book-flix-app.onrender.com/api/v1/movies');
  const data = await response.json();
  dispatch(setMovies(data));
};

const addMovie = (movie) => async (dispatch) => {
  await fetch('https://book-flix-app.onrender.com/api/v1/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
  dispatch(fetchMovies());
};

const deleteMovie = (id) => async (dispatch) => {
  await fetch(`https://book-flix-app.onrender.com/api/v1/movies/${id}`, {
    method: 'DELETE',
  });
  dispatch(fetchMovies());
};

export { fetchMovies, addMovie, deleteMovie };
export default moviesSlice.reducer;
