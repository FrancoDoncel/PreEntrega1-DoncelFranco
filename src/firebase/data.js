// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlBF4FlcNmoa5E4sxE2IxMBoNAZoz2tiU",
    authDomain: "elixirparfum-14595.firebaseapp.com",
    projectId: "elixirparfum-14595",
    storageBucket: "elixirparfum-14595.appspot.com",
    messagingSenderId: "818355456058",
    appId: "1:818355456058:web:bad0b1d4071d0daa53cd03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//constante que representa nuestra base de datos, la exportamos para usarla en cualquier lugar de nuestra app
export const db = getFirestore(app);