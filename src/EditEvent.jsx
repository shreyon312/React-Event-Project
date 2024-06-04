import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';                                    //import statements
import { useEditEvent } from './hooks/useEditEvent';
import { useGetData } from './hooks/useGetData';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { db } from './configuration/firebase'
import { useGetEvents } from "./hooks/useGetEvents";
import { useNavigate } from 'react-router-dom';

function EditEvent() {
    const { editEvent } = useEditEvent();                       //dereferencing hooks

    const [eventType, setEventType] = useState("");
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");                            //useStates defined
    const [eventTime, setEventTime] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [emailAddress, setEmailAddress] = useState("");

    const {id} = useParams();                               //document id is derived from the parameter passed in URL
    const { data } = useGetData(id);
    const { events } = useGetEvents();
    console.log("Document in question:", data);

    const navigate = useNavigate();

    useEffect(()=>{
        if(eventType || eventName || eventDate || eventTime || eventDescription || emailAddress){            //initially on first render, a lot of these fields may not have values in their useState, so this will be activated in the subsequent renders
            editEvent({id, eventType, eventName, eventDate, eventTime, eventDescription, emailAddress});
        }
        else if(data){                                   //once data exists, the default values will be set to their corresponding useStates
            setEventType(data.eventType);
            setEventName(data.eventName);
            setEventDate(data.eventDate);
            setEventTime(data.eventTime);
            setEventDescription(data.eventDescription);
            setEmailAddress(data.emailAddress);
        }
        
    }, [data, eventType, eventName, eventDate, eventTime, eventDescription, emailAddress]);

    const onSubmit = (e) => {           //when form is submitted, the link will navigate to home screen
        e.preventDefault()
        navigate('/');
    }

    return(
        <div>
            <header><NavBar/></header>
            {data ?                                                   //if there is data, then the page will render with default values. Ternary operator is used for that
            <main>
                <div className='content-container'>
                <div className='header-container'><h2>Edit Event</h2></div>
                    <Form className="form" onSubmit={onSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Select event type</Form.Label>
                            <Form.Select size="lg" onChange={(e) => setEventType(e.target.value)} defaultValue={data.eventType}>
                                <option selected hidden value="0">{data.eventType}</option>
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
                            <Form.Control size="lg" type="text" placeholder="Event Name" onChange={(e) => setEventName(e.target.value)} defaultValue={data.eventName}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDate">
                            <Form.Label>Enter date</Form.Label>
                            <Form.Control size="lg" type="date" placeholder="Event Name" onChange={(e) => setEventDate(e.target.value)} defaultValue={data.eventDate}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTime">
                            <Form.Label>Enter time</Form.Label>
                            <Form.Control size="lg" type="time" placeholder="Event Name" onChange={(e) => setEventTime(e.target.value)} defaultValue={data.eventTime}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridTextarea">
                            <Form.Label>Enter event description</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Event description" onChange={(e) => setEventDescription(e.target.value)} defaultValue={data.eventDescription}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Enter email</Form.Label>
                            <Form.Control size="lg" type="email" placeholder="Email address" onChange={(e) => setEmailAddress(e.target.value)} value={data.emailAddress}/>
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </main>
            :
            <main>
                <div className='content-container'>
                    <h2>Edit Event</h2>
                    <Form className="form-container" onSubmit={onSubmit}>
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
            </main>
            }

        </div>

    )
}

export default EditEvent