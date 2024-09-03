import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home/Home"; 
import BuyerScree from "../Pages/Buyer screen/BuyerScree";
import BuyerResult from "../Pages/BuyerSearchResult/BuyerResult";
import AboutPage from "../Pages/About/AboutPage";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
         {
            path: '/',
            element: <Home/>
         },
         {
            path: '/buy',
            element: <BuyerScree/>
         },
         {
            path: '/find-property',
            element: <BuyerResult/>
         },
         {
            path: '/about',
            element: <AboutPage/>
         },
         {
            path: '/details',
            element: <PropertyDetails/>
         }
      ]
    },
  ]);