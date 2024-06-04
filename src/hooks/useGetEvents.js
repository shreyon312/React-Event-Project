import { useEffect, useState } from 'react'; 
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../configuration/firebase"

export const useGetEvents = () => {
    const [events, setEvents] = useState([]);

    const eventCollectionRef = collection(db, "events")

    const getEvents = async () => {
        let unsubscribe;
        try {

            const queryEvents = query(eventCollectionRef);
            unsubscribe = onSnapshot(queryEvents, (snapshot) => {
                let docs = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({...data, id});
                });

                setEvents(docs);
            })

        } catch (err) { 
            console.error(err); 
        }

        return () => unsubscribe();
    }

    useEffect(() => {
        getEvents()
    }, [])

    return { events };
}