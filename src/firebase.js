import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsgFc8FJC-XMHs8e3_QaJoF_0z5iArZiI",
  authDomain: "spl-auction.firebaseapp.com",
  databaseURL: "https://spl-auction.firebaseio.com",
  projectId: "spl-auction",
  storageBucket: "spl-auction.appspot.com",
  messagingSenderId: "41654999594",
  appId: "1:41654999594:web:8ceb1d5241ee8972ffc153",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
