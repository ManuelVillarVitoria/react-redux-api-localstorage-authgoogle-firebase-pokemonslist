import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const  firebaseConfig = {
    apiKey: "AIzaSyAhazlN3z2kr7vdZsVXnSQr52LA80EepqY",
    authDomain: "react-redux-pokemonslist.firebaseapp.com",
    databaseURL: "https://react-redux-pokemonslist.firebaseio.com",
    projectId: "react-redux-pokemonslist",
    storageBucket: "react-redux-pokemonslist.appspot.com",
    messagingSenderId: "339444789061",
    appId: "1:339444789061:web:f344ca274ccb459625182c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()

  export {auth, firebase, db, storage}