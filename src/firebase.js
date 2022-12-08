import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA5VtG3WRzrLmomzGU_HRZGUkbJ2M361Q4",
    authDomain: "jcwdpwd2302.firebaseapp.com",
    projectId: "jcwdpwd2302",
    storageBucket: "jcwdpwd2302.appspot.com",
    messagingSenderId: "805309156023",
    appId: "1:805309156023:web:af36dd3326cf2cc5615b32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);