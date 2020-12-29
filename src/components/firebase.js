import firebase from 'firebase/app'
import 'firebase/firestore';
const config = {
  apiKey: "AIzaSyCxPKasHEn_2aLy9DmqdaEcTLKIKpQ6jCw",
  authDomain: "personal-data-9da50.firebaseapp.com",
  projectId: "personal-data-9da50",
  storageBucket: "personal-data-9da50.appspot.com",
  messagingSenderId: "921477282407",
  appId: "1:921477282407:web:df6bd007385442534e72c2",
  measurementId: "G-FTVMFKTKFH"
};
firebase.initializeApp(config)
export const db = firebase.firestore();

