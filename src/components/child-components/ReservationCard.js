import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../redux/ReservationsSlice';

const ReservationCard = ({
  startDate, endDate, userName, movieName, locationName, reservationId, movieImage,
}) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(deleteReservation(reservationId));
  };

  return (
    <div className="reservation-card col-md-12">
      <div className="image-and-text d-flex justify-content-start align-items-center">
        <img src={movieImage} alt={movieName} className="service-thumb" />
        <p className="my-0 mx-1 reservation-card-details">
          <strong>{movieName}</strong>
          {' '}
          service reserved by
          {' '}
          <strong>{userName}</strong>
          {' '}
          from
          {' '}
          <strong>{startDate}</strong>
          {' '}
          to
          {' '}
          <strong>{endDate}</strong>
          {' '}
          in
          {' '}
          <strong>{locationName}</strong>
        </p>
      </div>

      <button type="button" className="btn btn-danger" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default ReservationCard;

ReservationCard.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  reservationId: PropTypes.number.isRequired,
  movieImage: PropTypes.string.isRequired,
};
