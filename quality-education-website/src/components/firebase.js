import firebase from "firebase";
// Required for side-effects
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDct3YlAGA79uI6mXxEc1nDYCBGF3G8N5s",
  authDomain: "quality-education-4f84d.firebaseapp.com",
  databaseURL:
    "https://quality-education-4f84d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quality-education-4f84d",
  storageBucket: "quality-education-4f84d.appspot.com",
  messagingSenderId: "755529015901",
  appId: "1:755529015901:web:0ef6d35d3cb8a850c4e3b4",
  measurementId: "G-56L8EHKVG8",
});
const db = firebaseApp.firestore();

export default db;
