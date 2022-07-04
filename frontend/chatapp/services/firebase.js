import {initializeApp} from "firebase/app";

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

const app = initializeApp(firebaseConfig)