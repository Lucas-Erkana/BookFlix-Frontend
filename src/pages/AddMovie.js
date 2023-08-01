import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMovie } from '../store/MoviesSlice';
import { storage } from '../firebaseConfig';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [trailer, setTrailer] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [duration, setDuration] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAddClick = () => {
    if (!name || !price || !image || !details || !trailer) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const allowedExtensions = /\.(jpg|jpeg|png)$/i;
    if (!allowedExtensions.test(image.name)) {
      setErrorMessage('Invalid file format');
      return;
    }

    const storageRef = storage.ref();
    const fileRef = storageRef.child(image.name);

    setIsUploading(true);
    const uploadTask = fileRef.put(image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress);
      },
      (error) => {
        setErrorMessage(error.message);
        setIsUploading(false);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newMovie = {
            name,
            price,
            image: downloadURL,
            details,
            trailer,
            duration,
          };
          dispatch(addMovie(newMovie));
          setName('');
          setPrice('');
          setImage('');
          setDetails('');
          setTrailer('');
          setDuration('');
          setIsUploading(false);
          setUploadSuccess(true);
          navigate('/');
        });
      },
    );
  };
  const handleCancelClick = () => {
    navigate('/');
  };

  return (
    <div className="col-md col container-fluid d-flex justify-content-center align-items-center add-movie-container">
      <div className="d-flex flex-column m-5 align-items-center add-movie-div">
        <h2 className="text-white w-100 text-center my-3">Add New Movie</h2>

        <form className="row g-4 add-movie-form">
          <div className="col-md-12">
            <input type="text" placeholder="Movie Type" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="input-group col-md-12">
            <span className="input-group-text add-price-input">$</span>
            <input type="float" placeholder="Movie Charge" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
            <span className="input-group-text add-price-input">.00</span>
          </div>
          <div className="col-md-12">
            <input type="textarea" placeholder="Details" className="form-control" value={details} onChange={(e) => setDetails(e.target.value)} />
          </div>
          <div className="col-md-12">
            <input type="textarea" placeholder="trailer" className="form-control" value={trailer} onChange={(e) => setTrailer(e.target.value)} />
          </div>
          <div className="col-md-12 d-flex flex-md-row flex-column justify-content-between g-4">
            <input type="file" className="form-control" id="inputGroupFile02" onChange={handleFileChange} />
            <input type="number" placeholder="Duration" className="form-control" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </div>
          <div className="col-md-12 d-flex justify-content-end g-3">
            <button type="button" className="col-md-5 btn btn-light text-success rounded-pill mx-3" onClick={handleAddClick}>Add Movie</button>
            <button type="button" className="col-md-4 btn btn-danger rounded-pill" onClick={handleCancelClick}>Cancel</button>
          </div>

          {isUploading && (
          <div>
            <p className="text-light">
              Uploading:
              {uploadProgress}
              %
            </p>
          </div>
          )}

          {uploadSuccess && (
          <div>
            <p>File uploaded successfully!</p>
          </div>
          )}

          {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
