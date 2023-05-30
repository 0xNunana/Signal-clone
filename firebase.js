import { initializeApp } from 'firebase/app';
 import {getAuth} from "firebase/auth";

 import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD2Kk3Mtx3CKdprom_HZQfyOAE_RJeDEdg",
    authDomain: "signal-clone-c6020.firebaseapp.com",
    projectId: "signal-clone-c6020",
    storageBucket: "signal-clone-c6020.appspot.com",
    messagingSenderId: "126981162060",
    appId: "1:126981162060:web:f53a39aa1667926783a0e9"
  };


  const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)
 const auth =getAuth(app)
 export {db,auth}