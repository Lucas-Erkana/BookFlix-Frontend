import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBXb3v0YBTlYNazrGyC24nlsHI2qxtF_hY',
  authDomain: 'bookflix-7372c.firebaseapp.com',
  projectId: 'bookflix-7372c',
  storageBucket: 'bookflix-7372c.appspot.com',
  messagingSenderId: '475609461963',
  appId: '1:475609461963:web:05bd10d063aa93beac174e',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
