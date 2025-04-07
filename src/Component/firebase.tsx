import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



let app;



try {

  const firebaseConfig = {

    apiKey: import.meta.env.VITE_FIRE_BASE_API_KEY,

    authDomain: import.meta.env.VITE_AUTH_DOMAIN,

    projectId: import.meta.env.VITE_PROJECT_ID,

    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,

    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,

    appId: import.meta.env.VITE_APP_ID,

    measurementId: import.meta.env.VITE_MEASUREMENT_ID, 

  };



  app = initializeApp(firebaseConfig);

} catch (error) {

  console.error("Error initializing Firebase:", error);

}



export const auth = app ? getAuth(app) : null; 