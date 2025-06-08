import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Eksik olan import

const firebaseConfig = {
  apiKey: "AIzaSyCaI83cR53vO0zcV9YAteHg3D0ERCVHB5E",
  authDomain: "mysteria-8d976.firebaseapp.com",
  projectId: "mysteria-8d976",
  storageBucket: "mysteria-8d976.appspot.com", // .app yerine .appspot.com olmalı
  messagingSenderId: "149292355673",
  appId: "1:149292355673:web:88b4d964b170e37044a148",
  measurementId: "G-8XEBNF8HQF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app); // Storage bağlantısı eklendi

export { app, auth, storage }; // storage export edildi