import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDGRsqVeoP21Or-Spo6IIVHnwUp9j6Qu-Q",
    authDomain: "mern-inventory.firebaseapp.com",
    projectId: "mern-inventory",
    storageBucket: "mern-inventory.appspot.com",
    messagingSenderId: "1070545470751",
    appId: "1:1070545470751:web:9d0e1a624fb6effea59c2a",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
