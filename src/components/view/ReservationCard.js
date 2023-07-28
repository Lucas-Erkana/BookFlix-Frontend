import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../redux/ReservationsSlice';

const ReservationCard = ({
  startDate, endDate, userName, serviceName, locationName, reservationId, serviceImage,
}) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(deleteReservation(reservationId));
  };

  return (
    <div className="reservation-card col-md-12">
      <div className="image-and-text d-flex justify-content-start align-items-center">
        <img src={serviceImage} alt={serviceName} className="service-thumb" />
        <p className="my-0 mx-1 reservation-card-details">
          <strong>{serviceName}</strong>
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
  serviceName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  reservationId: PropTypes.number.isRequired,
  serviceImage: PropTypes.string.isRequired,
};
