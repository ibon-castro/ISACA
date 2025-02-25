import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, where, query } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { where, query } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXqlo1NT5GFKPCu8yleV5AaRPgZpvLqHc",
  authDomain: "isaca-rooted.firebaseapp.com",
  projectId: "isaca-rooted",
  storageBucket: "isaca-rooted.firebasestorage.app",
  messagingSenderId: "102143926859",
  appId: "1:102143926859:web:71a24a515c485a104763ce",
  measurementId: "G-985BD6PMFX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc };