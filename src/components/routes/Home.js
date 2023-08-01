import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from '../child-components/MovieCard';
import { fetchMovies } from '../../redux/MoviesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slidesPerView = isMobile ? 1 : 3;

  return (
    <div className="home col-md col">
      <h1 className="bold-font homepage-heading text-uppercase">
        movies to watch
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
          slidesPerView={slidesPerView}
          navigation
          loop // Enable looping
        >
          {/* Add slides at the beginning for a seamless loop */}
          {cards.slice(-slidesPerView).map((card) => (
            <SwiperSlide key={card.id}>
              <MovieCard
                name={card.name}
                image={card.image}
                details={card.details}
                price={card.price}
                id={card.id}
              />
            </SwiperSlide>
          ))}

          {/* Original slides */}
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <MovieCard
                name={card.name}
                image={card.image}
                details={card.details}
                price={card.price}
                id={card.id}
              />
            </SwiperSlide>
          ))}

          {/* Add slides at the end for a seamless loop */}
          {cards.slice(0, slidesPerView).map((card) => (
            <SwiperSlide key={card.id}>
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
