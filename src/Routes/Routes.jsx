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
import Update from "../components/Pages/Update/Update";
import SubCategory from "../components/Home/SubCategory/SubCategory";
import ErrorPage from "../components/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('https://craftopia-server-assignment10.vercel.app/craft_items')

        },
        {
            path:'/all_art_&_craft_items',
            element:<AllArtAndCrafts></AllArtAndCrafts>,
            loader: () => fetch('https://craftopia-server-assignment10.vercel.app/craft_items')
        },
        {
            path:'/add_craft_item',
            element:<PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
        },
        {
            path:'/art_&_craft_lists/',
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
          loader:({params}) => fetch(`https://craftopia-server-assignment10.vercel.app/view_details/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
         
        },
        {
          path:'/subCategory',
          element:<SubCategory></SubCategory>,
          // loader: () => fetch("http://localhost:5000/subCategory")
        }
      ]
    },
  ]);

  export default router;