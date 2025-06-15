import {createBrowserRouter,} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../layouts/Dashboard";
import AddPackage from "../pages/AddPackage/AddPackage";
import About from "../pages/About/About";
import ManagePackages from "../pages/ManagePackages/ManagePackages";
// import Error from "../pages/Error/Error";
import NotFound from "../pages/Error/NotFound";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AllPackages from "../pages/allPackages/AllPackages";
import TourGide from "../pages/tourGide/TourGide";
import MyBookings from "../pages/MyBookings/MyBookings";


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
        path: 'all-package',
        Component: AllPackages
      },
      {
        path: 'MyBookingsPackages',
        Component: MyBookings
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'tour-gide',
        Component: TourGide
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
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