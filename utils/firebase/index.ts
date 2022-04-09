// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB4-1AfpcZ5wo2jk9wA-tdhzc49x8MQMHg",
	authDomain: "webstout-blog.firebaseapp.com",
	databaseURL:
		"https://webstout-blog-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "webstout-blog",
	storageBucket: "webstout-blog.appspot.com",
	messagingSenderId: "621119557656",
	appId: "1:621119557656:web:8d5ce468941a14957f736d",
	measurementId: "G-RMRV5BSGWT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// apps
export const db = getDatabase(app);
export const storage = getStorage(app);
