import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./route/Root.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <></>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
