import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfb25TboMY38_nIYpaxkKG7ZBLHt2PlFY",
    authDomain: "clone-16370.firebaseapp.com",
    databaseURL: "https://clone-16370.firebaseio.com",
    projectId: "clone-16370",
    storageBucket: "clone-16370.appspot.com",
    messagingSenderId: "853246692778",
    appId: "1:853246692778:web:1cc98f86bd8aa87cfa6fd3",
    measurementId: "G-JTQ25ZMR3X"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }; 