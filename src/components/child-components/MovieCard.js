import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MovieCard = ({
  name, image, details, price, id,
}) => {
  const rating = Math.round((Math.random() * (5 - 4) + 4) * 10) / 10;

  return (
    <div>
      <div className="singlecard p-5">
        <NavLink to={{ pathname: `/movies/${id}` }}>
          <div className="image-size-div flex justify-center">
            <img src={image} alt={name} className="movie-image-size" />
          </div>
        </NavLink>
        <NavLink to={{ pathname: `/movies/${id}` }}>
          <h4 className="bold-font movie-name">{name}</h4>
        </NavLink>
        <hr className="dash" />
        <div className="movie-rating-price">
          <span className="bold-font gray-font">
            <i className="fa-sharp fa-solid fa-star-half-stroke" />
            {' '}
            {rating}
          </span>
          <span className="movie-circle-splitter" />
          <span className="bold-font gray-font">
            <i className="fa-solid fa-dollar-sign" />
            {' '}
            {price}
          </span>
        </div>
        <p className="gray-font movie-details">{details}</p>
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
