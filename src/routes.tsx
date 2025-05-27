import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homePage/index";
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
    ],
  },
]);
