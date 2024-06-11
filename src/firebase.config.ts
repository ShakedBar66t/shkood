import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_uh-Z30SIKbl4kgl7X5k0nwtAwuc59Zs",
  authDomain: "shkood-b3fec.firebaseapp.com",
  projectId: "shkood-b3fec",
  storageBucket: "shkood-b3fec.appspot.com",
  messagingSenderId: "87887187654",
  appId: "1:87887187654:web:18fe35002154b1268411c7",
  measurementId: "G-YD9YY5NL40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
