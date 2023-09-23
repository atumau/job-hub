import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsOuasfBPSW5XsRwocMvUJniDadrV99hk",
  authDomain: "job-hub-a765c.firebaseapp.com",
  projectId: "job-hub-a765c",
  storageBucket: "job-hub-a765c.appspot.com",
  messagingSenderId: "956297737847",
  appId: "1:956297737847:web:a49022c7f37872df6e7872",
  measurementId: "G-R44WETM0EZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export {app,auth,db}