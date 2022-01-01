import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDqBQxb1YxHM27YVAYvcpc3iV9d75DDbP4",
    authDomain: "disney-plus-clone-d5ec8.firebaseapp.com",
    projectId: "disney-plus-clone-d5ec8",
    storageBucket: "disney-plus-clone-d5ec8.appspot.com",
    messagingSenderId: "99285403947",
    appId: "1:99285403947:web:ab0611b9d36dc8ca185d6e",
    measurementId: "G-7R24J0W00V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
