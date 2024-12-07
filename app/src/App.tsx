import './App.css';
import { Login } from './components/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RegisterPartcipant } from './participants/RegisterParticipant';
import { CreateEvent } from './admins/CreateEvent';
import { Dashboard } from './admins/Dashboard';
import { ListUsers } from './admins/ListUsers';
import { ListGroup } from './admins/ListGroup';
import { ListEvents } from './admins/ListEvents';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },{
    path:"/home",
    element: <Dashboard/>
  },
  {
    path:"/user/list",
    element: <ListUsers/>
  },
  {
    path:"/group/list",
    element: <ListGroup/>
  },
  {
    path:"/event/list",
    element: <ListEvents/>
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
