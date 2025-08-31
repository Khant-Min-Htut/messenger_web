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
import { Errorpg } from "./features/Errorpg/pages/Errorpg"; // 👈 your error page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpg />, // 👈 will render if something throws an error
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "fordevelopers",
        element: <ForDevelopers />,
      },
      {
        path: "helpcentre",
        element: <HelpCentre />,
      },
      {
        path: "privacyandsafety",
        element: <PrivacyAndSafety />,
      },
      {
        path: "desktopapp",
        element: <DesktopApp />,
      },
    ],
  },
]);

export default router;
