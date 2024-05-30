// // src/firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyDYE52PUeC0MzQg2AERBEoj_EpFV528VRc",
//     authDomain: "contact-page-d4770.firebaseapp.com",
//     databaseURL: "https://contact-page-d4770-default-rtdb.firebaseio.com",
//     projectId: "contact-page-d4770",
//     storageBucket: "contact-page-d4770.appspot.com",
//     messagingSenderId: "509670851142",
//     appId: "1:509670851142:web:9ac151867a52886a074047",
//     measurementId: "G-6QNZSPBDJM"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

// export { database };
// src/firebaseConfig.js
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYE52PUeC0MzQg2AERBEoj_EpFV528VRc",
    authDomain: "contact-page-d4770.firebaseapp.com",
    databaseURL: "https://contact-page-d4770-default-rtdb.firebaseio.com",
    projectId: "contact-page-d4770",
    storageBucket: "contact-page-d4770.appspot.com",
    messagingSenderId: "509670851142",
    appId: "1:509670851142:web:9ac151867a52886a074047",
    measurementId: "G-6QNZSPBDJM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Sign in anonymously
signInAnonymously(auth)
    .then(() => {
        console.log("Signed in anonymously");
    })
    .catch((error) => {
        console.error("Error signing in anonymously: ", error);
    });

export { database };

