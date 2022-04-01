const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAMNhZ2bnoDkWK5xRHdm35NPQgI3DRX8wY",
  authDomain: "cryptosingalapplication.firebaseapp.com",
  projectId: "cryptosingalapplication",
  storageBucket: "cryptosingalapplication.appspot.com",
  messagingSenderId: "395521220562",
  appId: "1:395521220562:web:215075d23631bb87f6f20b",
  measurementId: "G-GZVSY7QGLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getFirestore(app);

module.exports = db;
