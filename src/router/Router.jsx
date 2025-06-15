import {createBrowserRouter,} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../layouts/Dashboard";
import AddPackage from "../pages/AddPackage/AddPackage";
import About from "../pages/About/About";
import ManagePackages from "../pages/ManagePackages/ManagePackages";
// import Error from "../pages/Error/Error";
import NotFound from "../pages/Error/NotFound";


const router = createBrowserRouter([


  {
    path: "/",
    Component: MainLayout,
    // errorElement:<Error />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'about',
        Component: About
      }
    ]
  },

// --------------------------------------------------------

  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: AddPackage
      },
      {
        path:'managePackage',
        Component:ManagePackages
      }
    ]
  },
  {
    path:'/*',
    Component:NotFound
  }



]);


export default router