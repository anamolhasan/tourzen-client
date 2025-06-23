import { createBrowserRouter } from "react-router";
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
import MyBookingsAllTours from "../pages/MyBookings/MyBookingsAllTours";
import DetailsTour from "../pages/detailsTour/DetailsTour";
import UpdateTour from "../pages/update/UpdateTour";
import PrivateRouter from "../private/PrivateRouter";
import Terms from "../pages/Trams&cndition/Terms";
import Privacy from "../pages/Trams&cndition/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    // errorElement:<Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-package",
        Component: AllPackages,
      },
      {
        path: "details-package/:id",
        Component: DetailsPackage,
        loader: ({ params }) =>
          fetch(`https://tour-zen-server-five.vercel.app/tours/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "MyBookingsPackages/:id",
        Component: MyBookingPackage,
      },
      {
        path: "MyBookingsAllTours",
        element: (
          <PrivateRouter>
            <MyBookingsAllTours />
          </PrivateRouter>
        ),
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "tour-gide",
        Component: TourGide,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "terms",
        Component: Terms,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
    ],
  },

  // --------------------------------------------------------

  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        element: (
          <PrivateRouter>
            <AddPackage />
          </PrivateRouter>
        ),
      },
      {
        path: "managePackage",
        element: (
          <PrivateRouter>
            <ManagePackages />
          </PrivateRouter>
        ),
      },
      {
        path: "updateTour/:id",
        Component: UpdateTour,
        loader: ({ params }) =>
          fetch(`https://tour-zen-server-five.vercel.app/tours/${params.id}`),
      },
      {
        path: "viewTour/:tour_Id",
        Component: DetailsTour,
        loader: ({ params }) =>
          fetch(`https://tour-zen-server-five.vercel.app/myBookingTour/tours/${params.tour_Id}`),
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);

export default router;
