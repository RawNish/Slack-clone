import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0KT-Y4R_hG6PKrIxYWDTjB50cFEg6VMw",
    authDomain: "slack-clone-d3cde.firebaseapp.com",
    projectId: "slack-clone-d3cde",
    storageBucket: "slack-clone-d3cde.appspot.com",
    messagingSenderId: "1062832687810",
    appId: "1:1062832687810:web:a048cf3e393b6d75c6495b"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
// const ref = firebase.firestore().collection("rooms");
export {db,auth,provider};