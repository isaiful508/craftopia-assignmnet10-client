import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import AllArtAndCrafts from "../components/Pages/AllArtAndCrafts/AllArtAndCrafts";
import AddCraftItem from "../components/Pages/AddCraftItem/AddCraftItem";
import ArtAndCraftLists from "../components/Pages/ArtAndCraftLists/ArtAndCraftLists";
import Register from "../components/Pages/Register/Register";
import Login from "../components/Pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/all_art_&_craft_items',
            element:<AllArtAndCrafts></AllArtAndCrafts>
        },
        {
            path:'/add_craft_item',
            element:<AddCraftItem></AddCraftItem>
        },
        {
            path:'/art_&_craft_lists',
            element:<ArtAndCraftLists></ArtAndCraftLists>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;