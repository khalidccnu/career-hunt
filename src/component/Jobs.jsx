import React, { useContext, useState } from "react";
import { LoaderContext } from "../route/Root.jsx";
import Job from "./Job.jsx";

const Jobs = () => {
  const [, jobs] = useContext(LoaderContext);
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <div className="text-center space-y-2 mb-10">
            <h3 className="font-semibold text-2xl">Featured Jobs</h3>
            <p className="text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {jobs.slice(0, showMore ? jobs.length : 4).map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
          {!showMore ? (
            <div className="mt-8 text-center">
              <button
                type="button"
                className="btn btn-sm btn-gradient border-0 rounded normal-case"
                onClick={(_) => setShowMore(true)}
              >
                See All Jobs
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
