import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayOut from './components/routes/LayOut';
import Home from './components/routes/Home';
import AddMovie from './components/routes/AddMovie';
import SignIn from './components/routes/SignIn';
import SignUp from './components/routes/SignUp';
import Details from './components/routes/Details';
import Reservations from './components/routes/Reservations';
import ReservationForm from './components/routes/ReservationForm';
import DeleteMovie from './components/routes/DeleteMovie';
import './assets/styles/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container col-md-12 d-flex">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route exact path="/movies/:id" element={<Details />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reserve" element={<ReservationForm />} />
          <Route path="/delete-movie" element={<DeleteMovie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
