// src/configs/firebaseClient.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQU9QS10QS_zKfacKkgotlIBM4LPFDkF0",
    authDomain: "capstone-paws-1.firebaseapp.com",
    projectId: "capstone-paws-1",
    storageBucket: "capstone-paws-1.appspot.com",
    messagingSenderId: "553833124769",
    appId: "1:553833124769:web:1d38a4a3166a996f45b1e0",
    measurementId: "G-0XJX9NHE0D"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
