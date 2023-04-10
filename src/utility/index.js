import axios from "axios";

export const rootLoader = async () => {
  const categories = await axios
    .get(`/categories.json`)
    .then((response) => response.data);
  const jobs = await axios.get(`/jobs.json`).then((response) => response.data);

  return [categories, jobs];
};

export const applyJob = (id) => {
  const job = getJob();

  job.push(id);
  localStorage.setItem("job", JSON.stringify(job));
};

export const getJob = () => {
  let job = [];
  const getJob = localStorage.getItem("job");

  if (getJob) job = JSON.parse(getJob);

  return job;
};
