import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div> {children}</div><br/>
      <Footer />
    </>
  );
};

export default Layout;
