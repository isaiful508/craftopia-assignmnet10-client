// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQaQcgzMO-EIm7elvBOjMN1C8mX6pqxG4",
  authDomain: "craftopia-auth-assignment10.firebaseapp.com",
  projectId: "craftopia-auth-assignment10",
  storageBucket: "craftopia-auth-assignment10.appspot.com",
  messagingSenderId: "673948997020",
  appId: "1:673948997020:web:8920217ab9b0a8e48ae459"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

// // Initialize Firebase (Ensure it's only initialized once)
// const app = initializeApp(firebaseConfig);

// // Export the authentication instance
// export const auth = getAuth(app);