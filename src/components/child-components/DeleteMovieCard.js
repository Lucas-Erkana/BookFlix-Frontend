import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../redux/MoviesSlice';

const DeleteMovieCard = ({ id, name, image }) => {
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    dispatch(deleteMovie(id));
    setShowConfirmation(false);
  };

  return (
    <div className="col-md-12 d-flex flex-column flex-md-row p-2 justify-content-between align-items-center delete-card rounded">
      <div className="d-flex flex-wrap align-items-center m-1">
        <img src={image} alt="service" className="img-thumbnail rounded m-2 delete-img" />
        <h4>{name}</h4>
      </div>
      <div className="px-2">
        {showConfirmation ? (
          <div className="confirmation-message d-flex flex-column align-items-end">
            <p>
              Are you sure?
              This will permanently delete the service and it&apos;s reservations.
            </p>
            <div className="d-flex g-2 justify-content-end">
              <button className="btn btn-outline-danger" type="button" onClick={handleDeleteClick}>
                Confirm Delete
              </button>
              <button className="btn btn-outline-secondary" type="button" onClick={() => setShowConfirmation(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="btn btn-danger delete-btn" type="button" onClick={() => setShowConfirmation(true)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

DeleteMovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DeleteMovieCard;
