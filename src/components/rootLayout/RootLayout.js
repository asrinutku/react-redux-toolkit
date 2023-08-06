import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import store from "../../store/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Navbar />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </Provider>
  );
};

export default RootLayout;
