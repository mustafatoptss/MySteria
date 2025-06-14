import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCaI83cR53vO0zcV9YAteHg3D0ERCVHB5E",
  authDomain: "mysteria-8d976.firebaseapp.com",
  projectId: "mysteria-8d976",
  storageBucket: "mysteria-8d976.appspot.com",
  messagingSenderId: "149292355673",
  appId: "1:149292355673:web:88b4d964b170e37044a148",
  measurementId: "G-8XEBNF8HQF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Google Auth ayarları
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
};