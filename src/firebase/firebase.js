import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwGv5LjN0zpru8-nc3-iy123UpBS9lVRU",
    authDomain: "srsr-dd59f.firebaseapp.com",
    projectId: "srsr-dd59f",
    storageBucket: "srsr-dd59f.firebasestorage.app",
    messagingSenderId: "1087866578234",
    appId: "1:1087866578234:web:6ef1fdd8e91cdcd0179c03",
    measurementId: "G-6SYWF4WFPP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
