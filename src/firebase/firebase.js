import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_BASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRE_BASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRE_BASE_APP_ID,
  measurementId: process.env.REACT_APP_FIRE_BASE_MEASUREMENT_ID,
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth, firebase as default };
