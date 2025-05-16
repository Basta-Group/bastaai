import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homePage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Portal from "./components/Portal";
import AppLayout from "./components/AppLayout";

// Define your routes using `createBrowserRouter`
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/portal",
        element: <Portal />,
      },
    ],
  },
]);
