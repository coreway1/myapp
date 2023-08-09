import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCh7jZ9eRWeiyj9GF6G9tWBhUsqZghB4U0",
    authDomain: "testphp-33d2a.firebaseapp.com",
    projectId: "testphp-33d2a",
    storageBucket: "testphp-33d2a.appspot.com",
    messagingSenderId: "195167984137",
    appId: "1:195167984137:web:83226bef72f5960426f6d8"
  };


  // const firebaseConfig = {
  //   apiKey: "AIzaSyCTkcoQd9sLRfTeLp5osQuc8j9p4chktPo",
  //   authDomain: "wishlist-53ac4.firebaseapp.com",
  //   databaseURL: "https://wishlist-53ac4-default-rtdb.firebaseio.com",
  //   projectId: "wishlist-53ac4",
  //   storageBucket: "wishlist-53ac4.appspot.com",
  //   messagingSenderId: "705361865502",
  //   appId: "1:705361865502:web:d8954552e63c5aff11b70f",
  //   measurementId: "G-LL9FDBMW46"
  // };
  

  const app = initializeApp(firebaseConfig);

  export default app;