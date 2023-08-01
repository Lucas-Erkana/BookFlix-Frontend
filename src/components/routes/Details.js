import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { fetchMovies } from '../../redux/MoviesSlice';
import ReserveFromMovie from '../child-components/ReserveFromMovie';
import IsAuthenticated from '../child-components/IsAuthenticated';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.movies);
  const movie = movies.find((movie) => movie.id === Number(id));
  const isLoggedIn = IsAuthenticated();

  const [showForm, setShowForm] = useState(false);

  const rating = Math.round((Math.random() * (5 - 4) + 4) * 10) / 10;

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleReserveClick = () => {
    setShowForm(true);
  };
  const handleCancelClick = () => {
    setShowForm(false);
  };
  const handleReturn = () => {
    navigate('/');
  };
  return (
    <>
      {!showForm ? (
        <div className="d-flex flex-column align-items-center col-md col container-main details-container justify-content-center px-2">

          <div className="container d-flex flex-md-row flex-sm-column flex-column">
            <div className="col-md-6 d-flex flex-column align-items-center">
              <div className="row">
                <div className="col-12 text-center">
                  <img src={movie.image} alt={movie.name} className="shadow-lg img-fluid mx-auto movie-details-image" />
                </div>
              </div>

              <div className="col-12">
                <button type="button" className="details-btn" onClick={handleReturn}>
                  <FaAngleLeft />
                  {' '}
                  Return
                </button>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column align-items-center">
              <h2>{movie.name}</h2>
              <table className="table table-striped ">
                <tbody>
                  <tr>
                    <td>Description</td>
                    <td>{movie.details}</td>
                  </tr>
                  <tr>
                    <td>Trailer</td>
                    <td><a href={movie.trailer} target="_blank" rel="noopener noreferrer">Watch now</a></td>
                  </tr>
                  <tr>
                    <td>Ticket charge</td>
                    <td>
                      $
                      {movie.price}
                    </td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>
                      {movie.duration}
                      {' '}
                      hours
                    </td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>
                      {' '}
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#008003' }} />
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#008003' }} />
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#008003' }} />
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#008003' }} />
                      <i className="fa-sharp fa-solid fa-star-half-stroke" />
                      {' '}
                      {rating}
                    </td>
                  </tr>
                </tbody>
              </table>
              {isLoggedIn && (
              <button type="button" onClick={() => handleReserveClick()} className="details-btn">Reserve</button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <ReserveFromMovie handleCancelClick={handleCancelClick} />
      )}
    </>
  );
};

export default Details;
