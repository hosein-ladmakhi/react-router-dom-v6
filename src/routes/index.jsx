import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import { authRegisterAction } from "../actions/register-action";
import { homeStoryLoader } from "../loaders/home-loader";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeStoryLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
        action: authRegisterAction,
        errorElement: <Register />,
      },
    ],
  },
]);
