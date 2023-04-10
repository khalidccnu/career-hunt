import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../component/Nav.jsx";

export const LoaderContext = createContext([]);

const Root = () => {
  const [categories, jobs] = useLoaderData();

  return (
    <>
      <Nav navLink={true} />
      <LoaderContext.Provider value={[categories, jobs]}>
        <Outlet />
      </LoaderContext.Provider>
    </>
  );
};

export default Root;
