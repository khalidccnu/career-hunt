import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootLoader } from "./utility/index.js";
import Root from "./route/Root.jsx";
import Error from "./route/Error.jsx";
import Home from "./route/Home.jsx";
import Statistic from "./route/Statistic.jsx";
import AppliedJobs from "./route/AppliedJobs.jsx";
import JobDetails from "./route/JobDetails.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      loader: rootLoader,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/statistic",
          element: <Statistic />,
        },
        {
          path: "/applied-job",
          element: <AppliedJobs />,
        },
        {
          path: "/jobs/details/:jobId",
          element: <JobDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
