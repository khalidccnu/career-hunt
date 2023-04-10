import axios from "axios";

export const rootLoader = async () => {
  const categories = await axios
    .get(`/categories.json`)
    .then((response) => response.data);
  const jobs = await axios.get(`/jobs.json`).then((response) => response.data);

  return [categories, jobs];
};
