import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_7F82t7YCHMXNka8Y6H4MlUvyeVM4W_I",
  authDomain: "jayjobs-41b3d.firebaseapp.com",
  projectId: "jayjobs-41b3d",
  storageBucket: "jayjobs-41b3d.firebasestorage.app",
  messagingSenderId: "966162089747",
  appId: "1:966162089747:web:db4f848d219e402447fce6",
  measurementId: "G-CXYDTYVW9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
