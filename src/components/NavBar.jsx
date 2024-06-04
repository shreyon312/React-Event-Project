import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


function TextLinkExample() {
  return (
    
    <Navbar fixed="top" className="bg-body-tertiary" >
      <Container>
            <Navbar.Brand href="/home"><img
              alt=""
              src="/src/components/images/Logo_eventify.png"
              width="43"
              height="35"
              className="d-inline-block align-center"
            />Eventify</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Upcoming Events</Nav.Link>
                <Nav.Link href="addEvent">Add New Event</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
      </Container>
    </Navbar>
    
    
  );
}

export default TextLinkExample;