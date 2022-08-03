import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBsXw48-MU2H2DVdTWzDlXcW59V9ACZLM4",
    authDomain: "fooddelivery-249db.firebaseapp.com",
    databaseURL: "https://fooddelivery-249db-default-rtdb.firebaseio.com",
    projectId: "fooddelivery-249db",
    storageBucket: "fooddelivery-249db.appspot.com",
    messagingSenderId: "96724191144",
    appId: "1:96724191144:web:b6c6b3a340e4565db4bf9d",
    measurementId: "G-TP696PSWY5"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)  
  const storage = getStorage(app)


  export {app, firestore, storage};
