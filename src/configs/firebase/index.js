import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAWTtbjUtnNCXnxrD_7Hm-YVPB4dSH-EhA",
    authDomain: "project-ta-a7bf8.firebaseapp.com",
    databaseURL: "https://project-ta-a7bf8-default-rtdb.firebaseio.com",
    projectId: "project-ta-a7bf8",
    storageBucket: "project-ta-a7bf8.appspot.com",
    messagingSenderId: "1002348283289",
    appId: "1:1002348283289:web:1cf2f3122b32d58055bf08"

  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
