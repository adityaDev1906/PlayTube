import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Pages/Home";
// import FetchIndv from "./components/UI/FetchIndv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    //   {
    //     path: "/rq",
    //     element: <FetchAll />,
    //   },
    //   {
    //     path: "/rq/:id",
    //     element: <FetchIndv />,
    //   },
    ],
  },
]);

export default router;
