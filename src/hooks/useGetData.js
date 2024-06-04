import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../configuration/firebase";
import { useState, useEffect } from 'react';


export const useGetData = (id) => {                      //hook to get data by document id from firebase database
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {                    //asynchronous function is defined with doucment id passed as a paramter
        const docRef = doc(db, "events", id);
        const docSnap = await getDoc(docRef);
        setData(docSnap.data());
    };

    fetchData();
  }, [id]); 

  return { data };
};