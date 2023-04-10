import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootLoader } from "./utility/index.js";
import Root from "./route/Root.jsx";
import Home from "./route/Home.jsx";
import JobDetails from "./route/JobDetails.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      children: [
        {
          path: "/",
          element: <Home />,
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
