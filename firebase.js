// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.FB_APIKEY,
  // authDomain: process.env.FB_AUTHDOMAIN,
  // projectId: process.env.FB_PROJECTID,
  // storageBucket: process.env.FB_STORAGEBUCKET,
  // messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  // appId: process.env.FB_APPID,
  apiKey: "AIzaSyBYSdqtob_dZi6RzM0_sVRTl0Xz0940fCM",
  authDomain: "aau-mart.firebaseapp.com",
  projectId: "aau-mart",
  storageBucket: "aau-mart.appspot.com",
  messagingSenderId: "318334734233",
  appId: "1:318334734233:web:58616a7ea81dc601794d08"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage();

export {app,storage}