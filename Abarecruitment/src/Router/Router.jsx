import {createBrowserRouter, useParams,} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path:"/",element:<Home/>},
        {
          path: "/Post Job",
          element:<CreateJob/>
        },
        {
          path: "/my-job",
          element:<MyJobs/>
        },
        {
          path: "edit-job/:id",
          element: <UpdateJob/>,
          loader: ({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },
      ],
    },
  ]);

  export default router;