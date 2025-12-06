
// firebase.js - Firebase configuration and initialization
// استخدم هذا الملف مع index_final_ready.html و app_final_ready.js

// تأكد من وضع بياناتك الحقيقية من Firebase Console هنا
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = firebase.firestore();
const storage = firebase.storage();
