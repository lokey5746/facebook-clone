import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx73qjzRsKUHK_BEbnEwiIH4tkp-R4Jdk",
  authDomain: "facebook-clone-f8b69.firebaseapp.com",
  databaseURL: "https://facebook-clone-f8b69.firebaseio.com",
  projectId: "facebook-clone-f8b69",
  storageBucket: "facebook-clone-f8b69.appspot.com",
  messagingSenderId: "1067758270357",
  appId: "1:1067758270357:web:47a02957bbe2590bf5689c",
};

//initalize firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Accesing Database
const db = firebaseApp.firestore();
//Accesing auth
const auth = firebase.auth();
//Accesing google auth provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
