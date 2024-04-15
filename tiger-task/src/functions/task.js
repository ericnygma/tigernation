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
        getTasks();
    } catch (error) {
        return error;
    }
}

export const getTasks = async (tasks) => {
    const tasksArray = [];
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        tasksArray.push({
            id: doc.id,
            ...doc.data()
        });
        return tasksArray;
    })
}