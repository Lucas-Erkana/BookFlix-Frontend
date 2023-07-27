import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayOut from './components/view/LayOut';
import Movie from './components/routes/Movie';
import AddMovie from './components/routes/AddMovie';
import SignIn from './components/view/SignIn';
import SignUp from './components/view/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/custom.scss';

function App() {
  return (
    <div className="container-fluid col-md-12 d-flex p-0">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Movie />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
