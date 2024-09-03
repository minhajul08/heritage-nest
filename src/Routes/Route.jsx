import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home/Home"; 
import BuyerScree from "../Pages/Buyer screen/BuyerScree";
import BuyerResult from "../Pages/BuyerSearchResult/BuyerResult";

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
         }
      ]
    },
  ]);