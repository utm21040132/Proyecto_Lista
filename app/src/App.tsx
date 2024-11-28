import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RegisterPartcipant } from './participants/RegisterParticipant';
import { CreateEvent } from './admins/CreateEvent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <RegisterPartcipant/>,
  },
  {
    path: "/recover-password",
    element: <CreateEvent/>,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
