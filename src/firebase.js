import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0Sw4O4jqendIHACORonTuxKE63RJxazA",
    authDomain: "facebook-clone-4c353.firebaseapp.com",
    projectId: "facebook-clone-4c353",
    storageBucket: "facebook-clone-4c353.appspot.com",
    messagingSenderId: "407075278330",
    appId: "1:407075278330:web:f8dbae916beeedcdf02843",
    measurementId: "G-BM3YLVLL0R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
