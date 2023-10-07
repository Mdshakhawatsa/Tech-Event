import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import LearnMore from "../pages/learnMore/LearnMore";
import Speakers from "../pages/speakers/Speakers";
import EventDetails from "../pages/eventDetails/EventDetails";
import Ticket from "../pages/tickets/Ticket";
import CardMain from "../pages/cardmain/CardMain";
import Services from "../pages/services/Services";
import CardDetails from "../pages/cardDetails/CardDetails";

const routes = createBrowserRouter([
    {
        path :'/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/fakedata.json')
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/learnmore',
                element:<LearnMore></LearnMore>,
            
            },
            {
                path: '/speaker',
                element: <Speakers></Speakers>
            },
            {
                path: '/eventdetails',
                element: <EventDetails></EventDetails>
            },
            {
                path: '/tiket',
                element: <Ticket></Ticket>
            },
            {
                path:'/card',
                element: <Services></Services>
                
            },
            {
                path:'/details/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('../fakedata.json')
            }

        ]
    }
]);
export default routes;
  