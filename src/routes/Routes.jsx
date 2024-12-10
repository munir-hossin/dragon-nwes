import { createBrowserRouter } from "react-router-dom";
import Main from "../layOuts/Main";
import Details from "../pages/Details";
import Home from "../pages/Home";
import LogIng from "../pages/LogIng";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LogIng />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/details",
        element: (
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export { router };
