import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import checkValidUser from "./checkValidUser";

//todo Mask DB access key
const firebaseConfig = {
    apiKey: "AIzaSyA5vDJptmITpgB6Fpc9IUwfgRMe1LJnNMA",
    authDomain: "samubase-b839f.firebaseapp.com",
    databaseURL: "https://samubase-b839f-default-rtdb.firebaseio.com",
    projectId: "samubase-b839f",
    storageBucket: "samubase-b839f.appspot.com",
    messagingSenderId: "860558059324",
    appId: "1:860558059324:web:d953e6057808a443fee039"
  };

//initialize app


const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore(); //creating connection

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };