import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../component/Nav.jsx";
import Footer from "../component/Footer.jsx";

export const LoaderContext = createContext([]);

const Root = () => {
  const [categories, jobs] = useLoaderData();

  return (
    <>
      <Nav navLink={true} />
      <LoaderContext.Provider value={[categories, jobs]}>
        <Outlet />
      </LoaderContext.Provider>
      <Footer />
    </>
  );
};

export default Root;
