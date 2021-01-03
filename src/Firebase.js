import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqD64PWNKTVRhtzYC5z18_kjPZC-ux_5s",
    authDomain: "facebook-messenger-clone-a162e.firebaseapp.com",
    projectId: "facebook-messenger-clone-a162e",
    storageBucket: "facebook-messenger-clone-a162e.appspot.com",
    messagingSenderId: "799405597420",
    appId: "1:799405597420:web:1a3bd157ab2b885eb8bbc9"
  });

const db =   firebaseApp.firestore();

export default db;