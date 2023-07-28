import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReservationCard from './ReservationCard';
import { fetchReservations } from '../../redux/ReservationsSlice';
import { fetchMovies } from '../../redux/MoviesSlice';
import { fetchLocations } from '../../redux/LocationsSlice';
import { fetchUsers } from '../../redux/UsersSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const services = useSelector((state) => state.movies.movies);
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

  const getServiceName = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    return service ? service.name : '';
  };

  const getServiceImage = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    return service ? service.image : '';
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
    <div className="col-md col container-main d-flex flex-column reservations align-items-center p-3">
      <div className="reservation-list container">
        <Link className="btn btn-success my-4 align-self-end" to="/reserve">Add Reservation</Link>
        {userReservations.map((reservation) => (
          <ReservationCard
            startDate={reservation.start_date}
            endDate={reservation.end_date}
            serviceName={getServiceName(reservation.service_id)}
            userName={getUserName(reservation.user_id)}
            locationName={getLocationName(reservation.location_id)}
            reservationId={reservation.id}
            serviceImage={getServiceImage(reservation.service_id)}
            key={reservation.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Reservations;
