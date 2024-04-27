import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import AllArtAndCrafts from "../components/Pages/AllArtAndCrafts/AllArtAndCrafts";
import AddCraftItem from "../components/Pages/AddCraftItem/AddCraftItem";
import ArtAndCraftLists from "../components/Pages/ArtAndCraftLists/ArtAndCraftLists";
import Register from "../components/Pages/Register/Register";
import Login from "../components/Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import ViewDetails from "../components/Home/ViewDetails/ViewDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/craft_items')

        },
        {
            path:'/all_art_&_craft_items',
            element:<AllArtAndCrafts></AllArtAndCrafts>
        },
        {
            path:'/add_craft_item',
            element:<PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
        },
        {
            path:'/art_&_craft_lists',
            element:<PrivateRoutes><ArtAndCraftLists></ArtAndCraftLists></PrivateRoutes>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/view_details/:id',
          element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
          loader:({params}) => fetch(`http://localhost:5000/view_details/${params.id}`)
        }
      ]
    },
  ]);

  export default router;