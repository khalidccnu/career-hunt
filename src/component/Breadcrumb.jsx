import React from "react";
import breadcrumbLeft from "../asset/breadcrumb-left.svg";
import breadcrumbRight from "../asset/breadcrumb-right.svg";

const Breadcrumb = ({ title }) => {
  return (
    <>
      <img
        src={breadcrumbRight}
        alt=""
        className="absolute top-0 right-0 w-44"
      />
      <div className="flex items-center relative min-h-[12rem] bg-[linear-gradient(90deg,_rgba(126,_144,_254,_0.05)_0%,_rgba(152,_115,_255,_0.05)_100%)] text-center">
        <img
          src={breadcrumbLeft}
          alt=""
          className="absolute bottom-0 left-0 w-44"
        />
        <div className="container">
          <h2 className="font-semibold text-2xl">{title}</h2>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
