import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaJLduF3iRLPWPspylFBlicSb8ApPxzgY",
  authDomain: "foutube-react.firebaseapp.com",
  projectId: "foutube-react",
  storageBucket: "foutube-react.appspot.com",
  messagingSenderId: "138528611228",
  appId: "1:138528611228:web:c075dc895a868b53134659",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
