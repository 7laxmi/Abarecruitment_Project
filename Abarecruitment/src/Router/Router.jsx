import {createBrowserRouter, useParams,} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import JobDetails from "../Pages/JobDetails";

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
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/sign-up",
      element: <Signup/>
    },
    {
      path: "/job/:id",
      element:<JobDetails/>
    }
  ]);

  export default router;