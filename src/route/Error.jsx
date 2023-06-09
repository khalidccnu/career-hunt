import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Nav from "../component/Nav.jsx";
import Footer from "../component/Footer.jsx";
import img404 from "../asset/404.svg";

const Error = () => {
  const { status, statusText } = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <Nav navLink={true} />
      <section className="py-5">
        <div className="container">
          <div className="card max-w-sm mx-auto bg-white">
            <figure>
              <img src={img404} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Oops!</h2>
              <h4 className="font-medium">
                {status && statusText ? status + " " + statusText : null}
              </h4>
              <p className="text-gray-500">
                Sorry, an error has occurred, Requested page not found!
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-sm btn-gradient border-0 rounded normal-case"
                  onClick={(_) => navigate(-1)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Error;
