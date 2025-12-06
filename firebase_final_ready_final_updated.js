// Firebase Web App Configuration for Bouslat-Alwazaef
const firebaseConfig = {
  apiKey: "AIzaSyBvKLeFCV6xH-24RRpw7WwJ4jEmlUjNZh4",
  authDomain: "bouslat-alwazaef.firebaseapp.com",
  projectId: "bouslat-alwazaef",
  storageBucket: "bouslat-alwazaef.firebasestorage.app",
  messagingSenderId: "533077574716",
  appId: "1:533077574716:web:e4ab49a3836570b17faf39"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
