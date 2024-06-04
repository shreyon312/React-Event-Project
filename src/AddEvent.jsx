import React, { useState, useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';                                               //import statements
import { useAddEvent } from "./hooks/useAddEvent";
import { useEditEvent } from './hooks/useEditEvent';
import { useNavigate } from 'react-router-dom';
import { db } from "./configuration/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


function AddEvent() {
    const { addEvent } = useAddEvent();                          //dereferencing hooks
    const { editEvent } = useEditEvent();

    const [eventType, setEventType] = useState("");                     //useState for all of the data fields
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [emailAddress, setEmailAddress] = useState("");

    const [id, setDocId] = useState(null);

    const navigate = useNavigate();                                    //navigate used to go to other pages after clicking submit button

    useEffect(() => {                            //useEffect used to add data directly into form without submitting form. A type of autosave

        if (id) {                             //after a document is already created, use the id to edit the existing fields from the useEditEvent hook
            console.log("Hello:", id);
            editEvent({id, eventType, eventName, eventDate, eventTime, eventDescription, emailAddress});
        }
        else if(eventType || eventName || eventDate || eventTime || eventDescription || emailAddress){               //otherwise addEvent hook is used to add a new event document when a new field has an input
            const docRef = addEvent({eventType, eventName, eventDate, eventTime, eventDescription, emailAddress});
            docRef.then((value) => {
                setDocId(value.id);
            });
            
        }

    }, [eventType, eventName, eventDate, eventTime, eventDescription, emailAddress]); // Run the effect when any of the data fields changes

    const onSubmit = (e) => {                    //when submit button is pressed, the link navigates to home page
        e.preventDefault()
        navigate('/');
    }

    return(
        <div>
            <header><NavBar/></header>
            <main>
                <div className='content-container'>
                <div className='header-container'><h2>Add Event</h2></div>
                    <div className='form-container'>
                        <Form className="form" onSubmit={onSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Select event type</Form.Label>
                                <Form.Select size="lg" defaultValue="Choose..." onChange={(e) => setEventType(e.target.value)}>
                                    <option selected hidden value="0">Event type</option>
                                    <option value="Conference">Conference</option>
                                    <option value="Networking">Networking</option>
                                    <option value="Workshop">Workshop</option>
                                    <option value="Charity">Charity</option>
                                    <option value="Festival">Festival</option>
                                    <option value="Restaurant">Restaurant</option>
                                </Form.Select>
                                </Form.Group>
                            </Row>
                            
                            <Row className="mb-3">
                                <Form.Group as={Col} xs={6} controlId="formGridName">
                                <Form.Label>Enter event name</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Event Name" onChange={(e) => setEventName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDate">
                                <Form.Label>Enter date</Form.Label>
                                <Form.Control size="lg" type="date" placeholder="Event Name" onChange={(e) => setEventDate(e.target.value)}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTime">
                                <Form.Label>Enter time</Form.Label>
                                <Form.Control size="lg" type="time" placeholder="Event Name" onChange={(e) => setEventTime(e.target.value)}/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridTextarea">
                                <Form.Label>Enter event description</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Event description" onChange={(e) => setEventDescription(e.target.value)}/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Enter email</Form.Label>
                                <Form.Control size="lg" type="email" placeholder="Email address" onChange={(e) => setEmailAddress(e.target.value)}/>
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </main>
            
        </div>

    )
}

export default AddEvent