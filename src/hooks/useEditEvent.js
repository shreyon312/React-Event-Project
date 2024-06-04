import { addDoc, collection, serverTimestamp, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../configuration/firebase";

export const useEditEvent = () => {                 //hook to edit document data

    const editEvent = async ({id, eventType, eventName, eventDate, eventTime, eventDescription, emailAddress}) => {
        
        const eventDoc = doc(db, "events", id);
        console.log("C:", eventDoc)
        await updateDoc(eventDoc, {                   //updateDoc function is used to modify data fields
            eventType,
            eventName,
            eventDate,
            eventTime,
            eventDescription,
            emailAddress,
            createdAt: serverTimestamp()
        });
        
    };
    
    return {editEvent};
}