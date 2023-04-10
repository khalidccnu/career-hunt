import React, { useContext, useEffect, useState } from "react";
import { getJob } from "../utility/index.js";
import { LoaderContext } from "./Root.jsx";
import Breadcrumb from "../component/Breadcrumb.jsx";
import AppliedJob from "../component/AppliedJob.jsx";

const AppliedJobs = () => {
  const [, jobs] = useContext(LoaderContext);
  const [filter, setFilter] = useState("");
  const [applied, setApplied] = useState([]);

  const handleFilter = ({ currentTarget }) => {
    switch (currentTarget.textContent.toLowerCase()) {
      case "onsite":
        setFilter("onsite");
        break;
      case "remote":
        setFilter("remote");
        break;
      default:
        setFilter("");
    }
  };

  useEffect(() => {
    const getJobs = getJob();
    const appliedJobs = [];

    for (let jobId of getJobs) {
      let getApplied;

      filter
        ? (getApplied = jobs.find(
            (job) =>
              job.id === jobId && job.remote_or_onsite.toLowerCase() === filter
          ))
        : (getApplied = jobs.find((job) => job.id === jobId));

      getApplied ? appliedJobs.push(getApplied) : null;
    }

    setApplied(appliedJobs);
  }, [filter]);

  return (
    <>
      <Breadcrumb title={"Applied Jobs"} />
      <section className="py-20">
        <div className="container">
          <div className="max-w-sm md:max-w-3xl mx-auto mb-10 text-end">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="bg-gray-200/40 px-5 py-3 rounded cursor-pointer"
              >
                Filter By &darr;
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 w-52 mt-3 p-2 rounded-box shadow"
              >
                <li onClick={(e) => handleFilter(e)}>
                  <a className={!filter ? "text-gradient" : null}>All</a>
                </li>
                <li onClick={(e) => handleFilter(e)}>
                  <a className={filter === "onsite" ? "text-gradient" : null}>
                    Onsite
                  </a>
                </li>
                <li onClick={(e) => handleFilter(e)}>
                  <a className={filter === "remote" ? "text-gradient" : null}>
                    Remote
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {applied.length ? (
            <div className="grid grid-cols-1 gap-5 max-w-sm md:max-w-3xl mx-auto">
              {applied.map((job) => (
                <AppliedJob key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="alert max-w-sm md:max-w-3xl mx-auto">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-info flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>No job was found.</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AppliedJobs;
