import React from "react";
import Breadcrumb from "../component/Breadcrumb.jsx";
import JobDetailsContainer from "../component/JobDetailsContainer.jsx";

const JobDetails = () => {
  return (
    <>
      <Breadcrumb title={"Job Details"} />
      <JobDetailsContainer />
    </>
  );
};

export default JobDetails;
