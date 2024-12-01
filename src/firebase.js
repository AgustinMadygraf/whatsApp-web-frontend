/*
Path: src/firebase.js
Este archivo es donde se configura la conexión con Firebase.
*/

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Verifica si las variables de entorno están definidas
const validateEnvVariables = () => {
  const keys = [
    'REACT_APP_APIKEY',
    'REACT_APP_AUTHDOMAIN',
    'REACT_APP_PROJECTID',
    'REACT_APP_STORAGEBUCKET',
    'REACT_APP_MESSAGINGSENDERID',
    'REACT_APP_APPID',
  ];

  keys.forEach((key) => {
    if (!process.env[key]) {
      console.error(`Error: Falta la variable de entorno ${key}`);
    } else {
      //console.log(`${key}: ${process.env[key]}`);
      console.log('Firebase Configurado');
    }
  });
};

validateEnvVariables();

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
