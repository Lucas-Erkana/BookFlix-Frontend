import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReservationCard from '../components/ReservationCard';
import { fetchReservations } from '../store/ReservationsSlice';
import { fetchMovies } from '../store/MoviesSlice';
import { fetchLocations } from '../store/LocationsSlice';
import { fetchUsers } from '../store/UsersSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const movies = useSelector((state) => state.movies.movies);
  const locations = useSelector((state) => state.locations.locations);
  const users = useSelector((state) => state.users.users);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchMovies());
    dispatch(fetchLocations());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getLocationName = (locationId) => {
    const location = locations.find((l) => l.id === locationId);
    return location ? location.name : '';
  };

  const getMovieName = (movieId) => {
    const movie = movies.find((s) => s.id === movieId);
    return movie ? movie.name : '';
  };

  const getMovieImage = (movieId) => {
    const movie = movies.find((s) => s.id === movieId);
    return movie ? movie.image : '';
  };

  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.full_name : '';
  };

  const userRole = localStorage.getItem('role');
  const userReservations = userRole === 'admin'
    ? reservations
    : reservations.filter((reservation) => reservation.user_id === Number(userId));

  return (
    <div className="col-md col container-main d-flex flex-column reservations align-items-center p-3 reservation-container">
      <div className="reservation-list container">
        <Link className="btn btn-success my-4 align-self-end" to="/reserve">Add Reservation</Link>
        {userReservations.map((reservation) => (
          <ReservationCard
            startDate={reservation.start_date}
            endDate={reservation.end_date}
            movieName={getMovieName(reservation.movie_id)}
            userName={getUserName(reservation.user_id)}
            locationName={getLocationName(reservation.location_id)}
            reservationId={reservation.id}
            movieImage={getMovieImage(reservation.movie_id)}
            key={reservation.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Reservations;
