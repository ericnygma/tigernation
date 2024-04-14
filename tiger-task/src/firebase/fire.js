import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3Ij4reGVts5e2D6HAYOhpCJgdd76teHM",
    authDomain: "listapproot.firebaseapp.com",
    projectId: "listapproot",
    storageBucket: "listapproot.appspot.com",
    messagingSenderId: "398474013698",
    appId: "1:398474013698:web:a332fd275f59da2a2b8b1b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
