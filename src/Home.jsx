import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EventBar from './components/EventBar'
import NavBar from './components/NavBar'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  
  return(
    <>
    <div>
      <header><NavBar/></header>
      <main>
        <div className='caption-container'>
            <h1>Feel organized without the effort</h1>
            <br/>
            <h3>Eventify helps you create, customize, and organize events according to your needs</h3>
            <br/>
            <Link to={"/"}><Button className="proceed" variant="light" size="lg">
                View upcoming events
            </Button></Link>
        </div>
      </main>
        
        
      
      
    </div>
    </>
  )

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
