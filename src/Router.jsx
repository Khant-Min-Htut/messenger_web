// src/Router.jsx

import { createBrowserRouter } from "react-router-dom";

import Layout from "./component/Layout";
import App from "./App";
import DesktopApp from "./features/DesktopApp/pages/DesktopApp";
import ForDevelopers from "./features/ForDevelopers/pages/ForDevelopers";
import HelpCentre from "./features/HelpCentre/pages/HelpCentre";
import PrivacyAndSafety from "./features/PrivacyAndSafety/pages/PrivacyAndSafety";
import Home from "./component/Home";
import Features from "./features/Features/pages/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // this is the main layout component
    children: [
      {
        path: "", // this means "/"
        element: <Home />, // this is the main component for the root path
      },
      {
        path: "/features", // "/about"
        element: <Features />, // this is the main component for the "/about" path
      },
      {
        path: "/fordevelopers", // "/contact"
        element: <ForDevelopers />, // this is the main component for the "/contact" path
      },
      {
        path: "/helpcentre", // "/FnQ"
        element: <HelpCentre />, // this is the main component for the "/FnQ" path
      },
      {
        path: "/privacyandsafety", // "/FnQ"
        element: <PrivacyAndSafety />, // this is the main component for the "/FnQ" path
      },
      {
        path: "/desktopapp", // "/FnQ"
        element: <DesktopApp />, // this is the main component for the "/FnQ" path
      },
    ],
  },
]);

export default router;
