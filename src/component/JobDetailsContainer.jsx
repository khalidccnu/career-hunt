import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { applyJob, getJob } from "../utility/index.js";
import { LoaderContext } from "../route/Root.jsx";
import {
  UilBriefcaseAlt,
  UilCheckCircle,
  UilEnvelope,
  UilLocationPoint,
  UilPhone,
  UilUsdCircle,
} from "./Unicons.jsx";

const JobDetailsContainer = () => {
  const { jobId } = useParams();
  const [, jobs] = useContext(LoaderContext);
  const [job, setJob] = useState({});
  const [apply, setApply] = useState(false);

  const handleApply = (id) => {
    applyJob(id);
    toast.success("Successfully applied!");
    setApply(true);
  };

  useEffect(() => {
    const getJob = jobs.find((job) => job.id === +jobId);
    setJob(getJob);
  }, []);

  useEffect(() => {
    const exist = getJob().find((id) => id === +jobId);

    exist ? setApply(true) : null;
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto items-center space-y-8 md:space-y-0">
          <div className="max-w-xl space-y-2 mr-auto">
            <div>
              <span className="font-semibold">Job Description: </span>
              <span className="text-gray-500">{job.job_description}</span>
            </div>
            <div>
              <span className="font-semibold">Job Responsibility: </span>
              <span className="text-gray-500">{job.job_responsibility}</span>
            </div>
            <div>
              <span className="font-semibold">Educational Requirement: </span>
              <span className="text-gray-500">
                {job.educational_requirements}
              </span>
            </div>
            <div>
              <span className="font-semibold">Experience: </span>
              <span className="text-gray-500">{job.experiences}</span>
            </div>
          </div>
          <div className="relative w-full lg:w-auto">
            <div className="bg-[linear-gradient(90deg,_rgba(126,_144,_254,_0.05)_0%,_rgba(152,_115,_255,_0.05)_100%)] px-5 py-10 rounded space-y-5">
              <div className="mt-7">
                <h5 className="font-semibold">Job Details</h5>
                <div className="border border-[#7E90FE]/30 my-3"></div>
                <div className="space-y-1.5">
                  <div>
                    <UilBriefcaseAlt className="inline w-5 mr-2 fill-[#7E90FE]" />
                    <span className="font-medium">Job Title: </span>
                    <span className="text-gray-500">{job.job_title}</span>
                  </div>
                  <div>
                    <UilUsdCircle className="inline w-5 mr-2 fill-[#7E90FE]" />
                    <span className="font-medium">Salary: </span>
                    <span className="text-gray-500">
                      {job.salary
                        ? job.salary
                            .split(" - ")
                            .map((salary) => salary + "K")
                            .join(" - ")
                        : 0}{" "}
                      (Per Month)
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold">Contact Information</h5>
                <div className="border border-[#7E90FE]/30 my-3"></div>
                <div className="space-y-1.5">
                  <div>
                    <UilPhone className="inline w-5 mr-2 fill-[#7E90FE]" />
                    <span className="font-medium">Phone: </span>
                    <span className="text-gray-500">
                      {job.contact_information?.phone}
                    </span>
                  </div>
                  <div>
                    <UilEnvelope className="inline w-5 mr-2 fill-[#7E90FE]" />
                    <span className="font-medium">Email: </span>
                    <span className="text-gray-500">
                      {job.contact_information?.email}
                    </span>
                  </div>
                  <div>
                    <UilLocationPoint className="inline w-5 mr-2 fill-[#7E90FE]" />
                    <span className="font-medium">Address: </span>
                    <span className="text-gray-500">{job.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-3 right-5">
              {apply ? (
                <button
                  type="button"
                  className="btn btn-sm btn-gradient border-0 rounded normal-case btn-disabled"
                >
                  Already Applied{" "}
                  <UilCheckCircle className="w-4 fill-white ml-1" />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-sm btn-gradient border-0 rounded normal-case"
                  onClick={(_) => handleApply(job.id)}
                >
                  Apply Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailsContainer;
