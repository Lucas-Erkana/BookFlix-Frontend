import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Home = () => {
  const cards = [{
    name: 'Movie 1',
    image: 'https://res.cloudinary.com/dx0nauane/image/upload/v1624349663/Movie%20Card%20Images/Movie_1_1_xqjz3c.jpg',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, sapien vitae aliquam dapibus, magna quam ultricies nunc, nec tincidunt nisl nunc vitae elit. ',
    price: 100,
    id: 1,
  }];

  const isMobile = window.innerWidth <= 768;

  return (
    <BrowserRouter>
      <div className="home col-md col">
        <h1 className="bold-font homepage-heading">
          OUR SERVICES
        </h1>
        <p className="gray-font">
          Please select a Movie to reserve
        </p>
        <hr className="dash home-dash" />
        <div className="carousel-container col-12">

          <div>
            {cards.map((card) => (
              <div
                key={card.id}
              >
                <div>
                  {card.name}
                  {card.image}
                  {card.details}
                  {card.price}
                  {card.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;
