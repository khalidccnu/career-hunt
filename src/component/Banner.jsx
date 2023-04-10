import React from "react";
import Lottie from "lottie-react";
import careerHuntAnm from "../asset/career-hunt.json";

const Banner = () => {
  return (
    <section className="flex items-center min-h-[calc(100vh_-_4rem)] bg-[linear-gradient(90deg,_rgba(126,_144,_254,_0.05)_0%,_rgba(152,_115,_255,_0.05)_100%)] py-5">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="max-w-xs">
            <Lottie animationData={careerHuntAnm} loop={true} />
          </div>
          <div className="max-w-xl space-y-4">
            <h1 className="font-semibold text-5xl">
              One Step Closer To Your{" "}
              <span className="text-gradient">Dream Job</span>
            </h1>
            <p className="text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button
              type="button"
              className="btn btn-sm btn-gradient border-0 rounded normal-case"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
