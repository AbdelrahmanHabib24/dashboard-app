// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuwyOmX8N-fW1wZ-n6Yr8Bzq25xsz0KUo",
  authDomain: "dashboard-app-fa0f3.firebaseapp.com",
  projectId: "dashboard-app-fa0f3",
  storageBucket: "dashboard-app-fa0f3.firebasestorage.app",
  messagingSenderId: "661150699005",
  appId: "1:661150699005:web:3de264cb78b4ae2ccddd94",
  measurementId: "G-23EB7G6ZTW",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };