import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const MovieCard = () => {
  const movie = [{
    name: 'Movie 1',
    image: 'https://res.cloudinary.com/dx0nauane/image/upload/v1624349663/Movie%20Card%20Images/Movie_1_1_xqjz3c.jpg',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, sapien vitae aliquam dapibus, magna quam ultricies nunc, nec tincidunt nisl nunc vitae elit. ',
    price: 100,
    id: 1,
  }];
  const rating = 5;

  return (
    <BrowserRouter>
      <div>
        <Link
          to={{
            pathname: `/movies/${movie.id}`,
          }}
          className="singlecard"
        >
          <img src={movie.image} alt={name} />
          <h4 className="bold-font movie-name">{movie.name}</h4>
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
              {movie.price}
            </span>
          </div>
          <p className="gray-font movie-details">{movie.details}</p>
        </Link>
      </div>
    </BrowserRouter>
  );
};

export default MovieCard;
