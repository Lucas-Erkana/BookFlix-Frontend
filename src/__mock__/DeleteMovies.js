import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const DeleteMovies = () => {
  const movies = [{
    name: 'Movie 1',
    image: 'https://res.cloudinary.com/dx0nauane/image/upload/v1624349663/Movie%20Card%20Images/Movie_1_1_xqjz3c.jpg',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, sapien vitae aliquam dapibus, magna quam ultricies nunc, nec tincidunt nisl nunc vitae elit. ',
    price: 100,
    id: 1,
  }];
  return (
    <BrowserRouter>
      <div className="container-fluid p-5">
        {movies.map((movie) => (
          <div className="row g-3 p-3" key={movie.id}>

            <div>
              {movie.id}
              {movie.id}
              {movie.name}
              {movie.image}
              {movie.details}
              {movie.trailer}
            </div>

          </div>
        ))}
      </div>
    </BrowserRouter>
  );
};

export default DeleteMovies;
