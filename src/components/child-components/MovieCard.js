import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MovieCard = ({
  name, image, details, price, id,
}) => {
  const rating = Math.round((Math.random() * (5 - 4) + 4) * 10) / 10;

  return (
    <div>
      <div className="singlecard">
        <NavLink to={{ pathname: `/services/${id}` }}>
          <img src={image} alt={name} className="service-image" />
        </NavLink>
        <NavLink to={{ pathname: `/services/${id}` }}>
          <h4 className="bold-font service-name">{name}</h4>
        </NavLink>
        <hr className="dash" />
        <div className="service-rating-price">
          <span className="bold-font gray-font">
            <i className="fa-sharp fa-solid fa-star-half-stroke" />
            {' '}
            {rating}
          </span>
          <span className="service-circle-splitter" />
          <span className="bold-font gray-font">
            <i className="fa-solid fa-dollar-sign" />
            {' '}
            {price}
          </span>
        </div>
        <p className="gray-font service-details">{details}</p>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
