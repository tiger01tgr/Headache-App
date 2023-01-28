import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const clientCredentials = {
    apiKey: "AIzaSyATHgMsDf-DoHiKiu3euWPYfcYG2MywQnY",
    authDomain: "headaches-45574.firebaseapp.com",
    projectId: "headaches-45574",
    storageBucket: "headaches-45574.appspot.com",
    messagingSenderId: "705616442647",
    appId: "1:705616442647:web:a6e301b7c57a079ac1b352",
    measurementId: "G-SB6Y72823C"
  };

let app;
if (firebase.apps.length == 0){
    app = firebase.initializeApp(clientCredentials);
}
else {
    app = firebase.app();
}
export const auth = getAuth(app);
export const db = getFirestore(app);
export default firebase;
