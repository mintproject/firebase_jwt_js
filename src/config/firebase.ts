import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import admin from "firebase-admin";

const firebaseConfig = {
    apiKey: process.env.GOOGLE_API_KEY,
    authDomain: "mint-full.firebaseapp.com",
    databaseURL: "https://mint-full.firebaseio.com",
    projectId: "mint-full",
    storageBucket: "mint-full.appspot.com",
    messagingSenderId: "128464392367",
    appId: "1:128464392367:web:97eaa44bc1fcb5296c445a"
};

export const firebase_admin = admin.initializeApp(firebaseConfig);
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(app);
