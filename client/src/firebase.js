import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCYEIcPtbOQWB-R5SUKzei5AKH0ia4tx_M",
    authDomain: "testsubject-3f285.firebaseapp.com",
    databaseURL: "https://testsubject-3f285-default-rtdb.firebaseio.com",
    projectId: "testsubject-3f285",
    storageBucket: "testsubject-3f285.appspot.com",
    messagingSenderId: "501319600086",
    appId: "1:501319600086:web:ce61b7af4266fad486c677",
    measurementId: "G-6GNG3MX4B6"
  };
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();

export const db = firebase.firestore();
export const arrayUnion = firebase.firestore.FieldValue.arrayUnion
export const deleteField = firebase.firestore.FieldValue.delete
export const arrayRemove = firebase.firestore.FieldValue.arrayRemove
