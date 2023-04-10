import React from "react";
import { useNavigate } from "react-router-dom";
import { UitLocationPoint, UitUsdCircle } from "./Unicons.jsx";

const Job = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="p-5 border border-gray-300 rounded space-y-1">
      <div className="max-w-[5rem]">
        <img src={job.company_logo} alt="" />
      </div>
      <h5 className="!mt-5 font-semibold">{job.job_title}</h5>
      <span className="text-gray-500">{job.company_name}</span>
      <div className="space-x-2">
        <div className="badge badge-gradient badge-outline rounded">
          {job.remote_or_onsite}
        </div>
        <div className="badge badge-gradient badge-outline rounded">
          {job.fulltime_or_parttime}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row text-gray-500 sm:space-x-8">
        <span className="flex space-x-1">
          <UitLocationPoint className="w-4 fill-[rgb(107,_114,_128)]" />
          <span>{job.location}</span>
        </span>
        <span className="flex space-x-1">
          <UitUsdCircle className="w-4 fill-[rgb(107,_114,_128)]" />
          <span>
            {job.salary
              .split(" - ")
              .map((salary) => salary + "K")
              .join(" - ")}
          </span>
        </span>
      </div>
      <button
        type="button"
        className="btn btn-sm btn-gradient border-0 rounded normal-case !mt-5"
        onClick={(_) => navigate("/jobs/details/" + job.id)}
      >
        View Details
      </button>
    </div>
  );
};

export default Job;
