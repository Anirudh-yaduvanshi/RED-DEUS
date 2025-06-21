import { createBrowserRouter } from "react-router";

import App from "./App";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Products from "./Pages/Products";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
     
      {
        path: "/about",
        element: <About />,
      },
     
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
     
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
