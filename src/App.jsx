import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootLoader } from "./utility/index.js";
import Root from "./route/Root.jsx";
import Home from "./route/Home.jsx";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
