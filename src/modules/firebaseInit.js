import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCjGQt6Jukb1hNeX4IkpC-r98-LRGbZlmE",
    authDomain: "database-c8265.firebaseapp.com",
    databaseURL: "https://database-c8265-default-rtdb.firebaseio.com",
    projectId: "database-c8265",
    storageBucket: "database-c8265.appspot.com",
    messagingSenderId: "856975238933",
    appId: "1:856975238933:web:4c73a9c1a6e3a429f4eb1c"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();