//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {

    // Your API stuff goes here;  get it from firebase console
    apiKey: "AIzaSyASwCvqj3_Y7kchBbwF_RNTlfqsPh8wx4s",
    authDomain: "pnsparkli.firebaseapp.com",
    databaseURL: "https://pnsparkli.firebaseio.com",
    projectId: "pnsparkli",
    storageBucket: "pnsparkli.appspot.com",
    messagingSenderId: "976943858986",
    appId: "1:976943858986:web:e9ecdca5178a4c6a6d0a53",
    measurementId: "G-0W1HFPTQHV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
const db = firebase.firestore();
