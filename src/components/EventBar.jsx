import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGetEvents } from "../hooks/useGetEvents"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDeleteEvent } from '../hooks/useDeleteEvent';
import { Link } from "react-router-dom";
import Modal from './Modal';
import { useState } from 'react';

function WithHeaderExample({eventTyp, eventNam, date, time, text, id}) {

  const { deleteEvent } = useDeleteEvent();
  const [ modalState, setModalState ] = useState(false);
  const handleModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${month}/${day}/${year}`;
  }

  function convertTo12HourFormat(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours % 12 || 12;
    return `${adjustedHours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
  }

  const formattedDate = formatDate(date.replace(/\//g, '-'));
  const regularTime = convertTo12HourFormat(time);
  console.log(modalState);

    return (
      <Card bg={'light'} style={{ width: '30%' }}>
        <Card.Header>{eventNam}</Card.Header>
        <Card.Body>
          <Card.Title>{eventTyp}</Card.Title>
          <br/>
          <Card.Subtitle>{formattedDate}, {regularTime}</Card.Subtitle>
          <br/>
          <Card.Text>
            {text}
          </Card.Text>
          <ButtonGroup aria-label="Basic example">
          <Link to={`/editEvent/${id}`}><Button variant="primary">Edit event</Button></Link>
            {/* <Button onClick={() => deleteEvent(id)} variant="danger">Delete event</Button> */}
            {/* <Button onClick={() => onDeleteClick(id)} variant="danger">Delete event</Button> */}
            <Button onClick={handleModal} variant="danger">Delete event</Button>
          </ButtonGroup>
          
        </Card.Body>
        <Modal docId={id} deleteFunct={closeModal} stateDelete={modalState}/>
        
      </Card>
    );
  }
  
  export default WithHeaderExample;