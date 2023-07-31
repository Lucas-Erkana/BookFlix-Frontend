import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

const DeleteMovieCard = () => {
  const service = [{
    name: 'Movie 1',
    image: 'https://res.cloudinary.com/dx0nauane/image/upload/v1624349663/Movie%20Card%20Images/Movie_1_1_xqjz3c.jpg',
    id: 1,
  }];

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(false);
  };

  return (
    <BrowserRouter>
      <div className="col-md-12 d-flex flex-column flex-md-row p-2 justify-content-between align-items-center delete-card rounded">
        <div className="d-flex flex-wrap align-items-center m-1">
          <img src={service.image} alt="service" className="img-thumbnail rounded m-2 delete-img" />
          <h4>{service.name}</h4>
        </div>
        <div className="px-2">
          {showConfirmation ? (
            <div className="confirmation-message d-flex flex-column align-items-end">
              <p>
                Are you sure you want to delete the service
                {' '}
                {service.name}
                ? This action cannot be undone.
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
    </BrowserRouter>
  );
};

export default DeleteMovieCard;
