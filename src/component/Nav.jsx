import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { UilBars, UilTimesCircle } from "./Unicons.jsx";

const Nav = ({ navLink }) => {
  const [hbMenu, setHbMenu] = useState(false);
  const collapseHbMenu = useRef();

  const handleHbMenu = (_) => {
    setHbMenu(!hbMenu);
  };

  const handleCollapseHbMenu = ({ target: elem }) => {
    if (!collapseHbMenu.current.contains(elem)) setHbMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCollapseHbMenu);

    return () =>
      document.removeEventListener("mousedown", handleCollapseHbMenu);
  }, []);

  return (
    <>
      <nav
        className="bg-[linear-gradient(90deg,_rgba(126,_144,_254,_0.05)_0%,_rgba(152,_115,_255,_0.05)_100%)]"
        ref={collapseHbMenu}
      >
        <div className="container">
          <div className="navbar justify-between">
            <h1 className="navbar-brand font-semibold text-xl">Career Hunt</h1>
            {navLink ? (
              <div className="navbar-nav relative">
                <span
                  className="sm:hidden cursor-pointer"
                  onClick={handleHbMenu}
                >
                  {hbMenu ? (
                    <UilTimesCircle className="h-6" />
                  ) : (
                    <UilBars className="h-6" />
                  )}
                </span>
                <ul
                  className={`menu menu-compact sm:menu-normal sm:menu-horizontal absolute sm:static ${
                    hbMenu ? "top-10" : "-top-60"
                  } -right-28 bg-neutral-100 sm:bg-transparent w-52 sm:w-auto p-2 sm:p-0 rounded-box shadow sm:shadow-none z-50 capitalize`}
                >
                  <li onClick={(_) => setHbMenu(false)}>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-gradient" : ""
                      }
                    >
                      home
                    </NavLink>
                  </li>
                  <li onClick={(_) => setHbMenu(false)}>
                    <NavLink
                      to="/shop"
                      className={({ isActive }) =>
                        isActive ? "text-gradient" : ""
                      }
                    >
                      statistic
                    </NavLink>
                  </li>
                  <li onClick={(_) => setHbMenu(false)}>
                    <NavLink
                      to="/order-review"
                      className={({ isActive }) =>
                        isActive ? "text-gradient" : ""
                      }
                    >
                      applied job
                    </NavLink>
                  </li>
                  <li onClick={(_) => setHbMenu(false)}>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "text-gradient" : ""
                      }
                    >
                      blog
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
            <button
              type="button"
              className="btn btn-sm btn-gradient border-0 rounded normal-case"
            >
              Start Apply
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
