import { addDoc, collection, serverTimestamp, deleteDoc, doc } from "firebase/firestore";
import { db } from "../configuration/firebase";

export const useDeleteEvent = () => {

    const deleteEvent = async (id) => {
        const eventDoc = doc(db, "events", id)
        await deleteDoc(eventDoc);
        
    };
    
    return {deleteEvent};
}