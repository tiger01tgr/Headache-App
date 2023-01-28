import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const clientCredentials = {

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
