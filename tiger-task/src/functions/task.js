import { collection, addDoc, doc, getDoc, getDocs, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/fire'

export const createTask = async (task) => {
    try {
        const docRef = await addDoc(collection(db, 'tasks'), {
            ...task,
            completed: false,
            createdAt: new Date(),
        });
        console.log('Document written with ID: ', docRef.id);

    } catch (error) {
        return error;
    }
}

