import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayOut from './components/view/LayOut';
import Movie from './components/routes/Movie';
import AddMovie from './components/routes/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';

function App() {
  return (
    <div className="container-fluid col-md-12 d-flex p-0">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Movie />} />
          <Route path="/add-movie" element={<AddMovie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
