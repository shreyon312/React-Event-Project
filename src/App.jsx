import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'                                          //import statements
import EventBar from './components/EventBar'
import NavBar from './components/NavBar'
import Container from 'react-bootstrap/Container';
import { useGetEvents } from "./hooks/useGetEvents"

function App() {

  const { events } = useGetEvents();
  let hasEvents = false;                        //events is compiled into an array type structure after being read from Firebase
  if(events.length > 0){
    hasEvents = true;
  }

  console.log(events);
  return(
    <>
    <div>                                               
      <header><NavBar/></header>                       {/*Navbar component*/}  
      <main>
        <div className='content-container'>
          <div className='header-container'>
            <h2>Upcoming Events</h2>                   {/*Header for upcoming events*/}  
          </div>
          {hasEvents ?                                      //ternary operator to make sure there are events in the database, otherwise it will show no events
                <div className='event-container'>
                    {events.map((eve) => {                 //map to go through all events in array and returned by passing values into eventbar
                      const {eventType,
                        eventName,
                        eventDate,
                        eventTime,
                        eventDescription,
                        emailAddress } = eve;
                      return(                           //eventbar is returned and numerous parameters are 
                        <EventBar eventTyp={eventType} eventNam={eventName} date={eventDate} time={eventTime} text={eventDescription} id={eve.id}/>
                      )
                    })}
                </div>
                :
                <div className='event-container'>
                    <h3>No upcoming events</h3>             {/*If there are no events, then no upcoming events will be displayed*/}
                </div>

          }

        </div>
      </main>
        
    </div>
    </>
  )


}

export default App
