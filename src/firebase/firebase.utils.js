import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDnc1DWjpIs0S0XWxxWibWW6MiUWDkqEMc",
  authDomain: "wincore-store.firebaseapp.com",
  projectId: "wincore-store",
  storageBucket: "wincore-store.appspot.com",
  messagingSenderId: "890497107143",
  appId: "1:890497107143:web:158a3c686d1e1bebe42ae2",
  measurementId: "G-JHDFMHDPXL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
