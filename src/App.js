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
import PrivateRoute from './components/child-components/PrivateRoute';
import AdminRoute from './components/child-components/AdminRoute';
import './index.css';
import './assets/styles/custom.scss';

function App() {
  return (
    <div className="app-container col-md-12 d-flex">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route exact path="/movies/:id" element={<Details />} />
          <Route
            exact
            path="/reserve"
            element={<PrivateRoute />}
          >
            <Route
              exact
              path="/reserve"
              element={<ReservationForm />}
            />
          </Route>
          <Route
            exact
            path="/reservations"
            element={<PrivateRoute />}
          >
            <Route
              exact
              path="/reservations"
              element={<Reservations />}
            />
          </Route>
          <Route
            exact
            path="/add-movie"
            element={<AdminRoute />}
          >
            <Route
              exact
              path="/add-movie"
              element={<AddMovie />}
            />
          </Route>
          <Route
            exact
            path="/delete-movie"
            element={<AdminRoute />}
          >
            <Route
              exact
              path="/delete-movie"
              element={<DeleteMovie />}
            />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
