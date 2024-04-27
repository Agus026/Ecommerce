
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDs-jdLn4GcKiQnf1fhMYncSuzsVVshGYo",
  authDomain: "ramplate-ecommerce.firebaseapp.com",
  projectId: "ramplate-ecommerce",
  storageBucket: "ramplate-ecommerce.appspot.com",
  messagingSenderId: "657033168665",
  appId: "1:657033168665:web:019342351c2b59e1ece788"
};


initializeApp(firebaseConfig);

const db = getFirestore()
export default db