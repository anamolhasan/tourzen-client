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
// import MyBookings from "../pages/MyBookings/MyBookings";
import DetailsPackage from "../pages/detailsPackage/DetailsPackage";
import Loading from "../components/shared/Loading";
import MyBookingPackage from "../pages/MyBookings/MyBookingPackage";


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
        path: 'details-package/:id',
        Component: DetailsPackage,
        loader: ({params})=>fetch(`http://localhost:3000/tours/${params.id}`),
        hydrateFallbackElement: <Loading />
      },
      {
        path: 'MyBookingsPackages/:id',
        Component: MyBookingPackage
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