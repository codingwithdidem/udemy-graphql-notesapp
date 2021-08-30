import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-indigo-100">
      <Header />
      <div className="flex-1 mx-auto container h-full w-full">{children}</div>
    </div>
  );
};

export default Layout;
