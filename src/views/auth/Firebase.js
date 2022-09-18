// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmFVDT4bQhhvD3HIDo7j-Yx1GzsK8AUkQ",
    authDomain: "caladrius-tech-a-thon.firebaseapp.com",
    projectId: "caladrius-tech-a-thon",
    storageBucket: "caladrius-tech-a-thon.appspot.com",
    messagingSenderId: "611043656305",
    appId: "1:611043656305:web:e74afd67de4fe9b1ac11d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Akshat
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope(provider);
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
};