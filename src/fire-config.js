import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js';
// import { getAuth } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';
// import { doc, setDoc, getFirestore, addDoc, collection, getDoc, deleteDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';


const firebaseConfig = {
    apiKey: "AIzaSyCh7jZ9eRWeiyj9GF6G9tWBhUsqZghB4U0",
    authDomain: "testphp-33d2a.firebaseapp.com",
    projectId: "testphp-33d2a",
    storageBucket: "testphp-33d2a.appspot.com",
    messagingSenderId: "195167984137",
    appId: "1:195167984137:web:83226bef72f5960426f6d8"
  };
  

  const app = initializeApp(firebaseConfig);

  export default app;