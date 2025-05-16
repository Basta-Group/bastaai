import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";
import { useScrollToTop } from "../utils/useScrollToTop";

const AppLayout: React.FC = () => {
  useScrollToTop();
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
