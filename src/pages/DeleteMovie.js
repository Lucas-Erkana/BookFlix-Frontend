import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../store/MoviesSlice';
import DeleteMoviesCard from '../components/DeleteMovieCard';

const DeleteMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <div className="container-fluid p-5 delete-container">
      {movies.map((movie) => (
        <div className="row g-3 p-3" key={movie.id}>

          <DeleteMoviesCard
            key={movie.id}
            id={movie.id}
            name={movie.name}
            image={movie.image}
            details={movie.details}
            trailer={movie.trailer}
          />

        </div>
      ))}
    </div>
  );
};

export default DeleteMovies;
