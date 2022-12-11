import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCe0JQno4p9Ss6PZJRpAM83vPwdLgQ8j-c",
    authDomain: "stjohnsenseada.firebaseapp.com",
    projectId: "stjohnsenseada",
    storageBucket: "stjohnsenseada.appspot.com",
    messagingSenderId: "1033188320665",
    appId: "1:1033188320665:web:e0949215674884f65d9f08",
    measurementId: "G-JXZ8S33684"
  };
  
  if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase
  