import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddEvent from './AddEvent.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EditEvent from './EditEvent.jsx'
import Home from './Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "addEvent",
    element: <AddEvent/>,
  },
  {
    path: "editEvent/:id",
    element: <EditEvent/>,
  },
  {
    path: "editEvent/addEvent",
    element: <AddEvent/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
