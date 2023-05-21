import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Addtoys from "../Pages/Addtoys/Addtoys";
import Mytoys from "../Pages/Mytoys/Mytoys";
import Information from "../Pages/AllToys/Information";

import UpdateToys from "../Pages/Mytoys/UpdateToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/info/:id",
        element: (
          <PrivateRoute>
            <Information />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-dusky-eight.vercel.app/toyProducts/${params.id}`
          ),
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateToys />,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-dusky-eight.vercel.app/toyProducts/${params.id}`
          ),
      },

      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <Addtoys />
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <Mytoys />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
