import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/homePage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Portal from "./components/Portal";

// Define your routes using `createBrowserRouter`
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
          </>
        ),
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
