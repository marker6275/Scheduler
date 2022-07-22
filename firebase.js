import firebase from "firebase/compat/app";
import "firebase/compat/database";
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCop8plCEqM2mweJaw_HFTbqmIoXel0ZNE",
    authDomain: "scheduler-dc63c.firebaseapp.com",
    databaseURL: "https://scheduler-dc63c-default-rtdb.firebaseio.com",
    projectId: "scheduler-dc63c",
    storageBucket: "scheduler-dc63c.appspot.com",
    messagingSenderId: "60929471514",
    appId: "1:60929471514:web:3ce0ae831a803435110da3",
    measurementId: "G-QSPS9KTYPK"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };