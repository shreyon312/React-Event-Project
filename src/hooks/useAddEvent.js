import { addDoc, collection, serverTimestamp } from "firebase/firestore";         //import statements
import { db } from "../configuration/firebase"

export const useAddEvent = () => {                             //hook for adding events
    const eventCollectionRef = collection(db, "events");       //used to reference the collection in Firebase based on the collection name

    const addEvent = async ({eventType, eventName, eventDate, eventTime, eventDescription, emailAddress}) => {      //asynchronous function with parameters
        return(await addDoc(eventCollectionRef, {              //document is added into the event collection based on the given parameters
            eventType,
            eventName,
            eventDate,
            eventTime,
            eventDescription,
            emailAddress,
            createdAt: serverTimestamp()                        //server timestamp will show the time that event was created
        }));
        
    };
    
    return {addEvent};
}