// src/Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FnQ from "./pages/FnQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", // this means "/"
        element: <Home />,
      },
      {
        path: "about", // "/about"
        element: <About />,
      },
      {
        path: "contact", // "/contact"
        element: <Contact />,
      },
      {
        path: "FnQ", // "/FnQ"
        element: <FnQ />,
      },
    ],
  },
]);

export default router;
