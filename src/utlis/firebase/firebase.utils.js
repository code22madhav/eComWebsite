import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8UWhywO3PAvbkv2AsXRmUZkj66PpnjhU",
    authDomain: "shopgen-z.firebaseapp.com",
    projectId: "shopgen-z",
    storageBucket: "shopgen-z.firebasestorage.app",
    messagingSenderId: "1017955955401",
    appId: "1:1017955955401:web:b1376853b899b85ae2d318"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig); //Even though you're not directly using firebaseApp, the initializeApp() function sets up this default app context. Without it, Firebase services like getAuth() or getFirestore() won't know which configuration to use, and they'll throw errors.

  const provider= new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth(); //When you call initializeApp(firebaseConfig), Firebase creates a "default app" instance for your application. This default app acts as the central hub for all Firebase services, and its configuration is shared across services like Authentication, Firestore, etc.
  export const signInWithGooglePopup=()=>signInWithPopup(auth, provider);


  export const db= getFirestore();

  export const createuserfromAuth = async (userAuth, additionalData)=>{
    const userDocRef=doc(db, 'users', userAuth.uid);
    const userSnap=await getDoc(userDocRef);
    if(!userSnap.exists()){
      const {displayName, email }=userAuth;
      const createdAt= new Date();
      try{
        await setDoc(userDocRef,{
          displayName,
          email, 
          createdAt,
          ...additionalData,
        });
      }catch(error){
        console.log(`error +${error.message}`);
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword=async(email, password)=>{
    if(!email || !password){
      console.log('email or password not passed to createAuth in firebase/utils');
    }
    return await createUserWithEmailAndPassword(auth, email, password);
  } 

  export const signInAuthUserWithEmailAndPassword=async(email, password)=>{
    if(!email || !password){
      console.log('email or password not passed to createAuth in firebase/utils');
    }
    return await signInWithEmailAndPassword(auth, email, password);
  } 