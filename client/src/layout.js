import React from "react";
import { Nav, Posts, Subscribe, Footer } from "./components";

const Layout = ({ children }) => {

  return (
    <div className="w-full flex flex-col space-y-16">
      <Nav />
      {children}
      <Posts />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;
