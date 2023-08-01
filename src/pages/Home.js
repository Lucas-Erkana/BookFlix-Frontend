import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../store/MoviesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="home col-md col">
      <h1 className="bold-font homepage-heading">
        OUR MOVIES
      </h1>
      <p className="gray-font">
        Please select a Movie to reserve
      </p>
      <hr className="dash home-dash" />
      <div className="carousel-container col-12">

        <Swiper
          className="movie-list col-10"
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={isMobile ? 1 : 3}
          navigation
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
            >
              <MovieCard
                name={card.name}
                image={card.image}
                details={card.details}
                price={card.price}
                id={card.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Home;
