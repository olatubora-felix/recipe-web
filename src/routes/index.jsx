import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/home";
import ExplorePage from "../pages/explore";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/explore/:tag",
        element: <ExplorePage />,
      },
    ],
  },
]);
