import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home/Home";
import BuyerCover from "../Pages/Buyer screen/BuyerCover";

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
            element: <BuyerCover/>
         }
      ]
    },
  ]);