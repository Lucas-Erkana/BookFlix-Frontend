import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { createReservation } from '../store/ReservationsSlice';
import { fetchLocations } from '../store/LocationsSlice';
import { fetchMovies } from '../store/MoviesSlice';

const ReservationForm = () => {
  const { id } = useParams(); // Extract the movieId from the URL path
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locations = useSelector((state) => state.locations.locations);
  const movies = useSelector((state) => state.movies.movies);
  const userId = localStorage.getItem('userId');
  const fullName = localStorage.getItem('full_name');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [movieId, setMovieId] = useState(id || '');
  const [locationId, setLocationId] = useState('');

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      setMovieId(id); // Set the movieId extracted from the URL as the initial value
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservationData = {
      start_date: startDate,
      end_date: endDate,
      movie_id: parseInt(movieId, 10),
      user_id: parseInt(userId, 10),
      location_id: parseInt(locationId, 10),
    };

    dispatch(createReservation(reservationData));

    setStartDate('');
    setEndDate('');
    setMovieId('');
    setLocationId('');

    navigate('/reservations');
  };

  return (
    <div className="col-md col container-main reservation-form-body p-0 reservation-container">
      <div className="reservation-form-overlay col-md p-2 m-0 d-flex flex-column align-items-center justify-content-center">
        <h1 className="heading text-light text-uppercase text-center">Create New Reservation</h1>
        <hr className="w-50 border-top-2 border-light" />
        <form onSubmit={handleSubmit} id="reservation-form" className="d-flex flex-column align-items-center g-6">
          <div className="d-flex input-row align-items-center g-4">
            <label htmlFor="userId">
              Name:
              <input className="p-2 form-control" type="text" value={fullName} disabled />
            </label>
            <label htmlFor="locationId">
              <div className="select-wrapper">
                <select className="p-2 px-0" value={locationId} onChange={(e) => setLocationId(e.target.value)} name="locationId">
                  <option value="">Select a location</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
                <i className="fa-solid fa-angle-down" />
              </div>
            </label>
          </div>
          <div className="d-flex input-row align-items-center g-4">
            <label htmlFor="movieId">
              <div className="select-wrapper">
                <select className="p-2 px-0" defaultValue={movieId} onChange={(e) => setMovieId(e.target.value)} name="movieId">
                  <option value="">Select a movie</option>
                  {movies.map((movie) => (
                    <option
                      key={movie.id}
                      value={movie.id}
                    >
                      {movie.name}
                    </option>
                  ))}
                </select>
                <i className="fa-solid fa-angle-down" />
              </div>
            </label>
            <label htmlFor="startDate">
              From:&nbsp;
              <input className="p-2 form-control" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} name="startDate" />
            </label>
            <label htmlFor="endDate">
              To:&nbsp;
              <input className="p-2 form-control" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} name="endDate" />
            </label>
          </div>
          <button type="submit" className="btn btn-light text-success">Create Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
