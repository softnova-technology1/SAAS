import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import RootLayout from "./Components/RootLayout";
import Hero from "./Components/HeaderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Team1 from "./Components/Team1";
import Team2 from "./Components/Team2";
import Team3 from "./Components/Team3";
import Project from "./Components/Project";
import Contactnav from "./Components/Contactnav";
import "./App.css";
import AboutUs from "./Components/About";
import { Projects } from "./Components/Projects";
import { Services } from "./Components/Services";
import { Contactnav } from "./Components/Contactnav";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
<<<<<<< HEAD
          path: "/Hero",
          element: <Hero />,
        },
         {
          path: "/about",
          element: <AboutUs />,
        },
=======
        index: true, 
        element: <Hero />,
      },
        { path: "/About", element: <About/> }, 
        { path: "/Team1", element: <Team1/> }, 
         { path: "/Team2", element: <Team2/> },
          { path: "/Team3", element: <Team3/> },
          { path: "/Project", element: <Project/> },
           { path: "/Contactnav", element: <Contactnav/> },
>>>>>>> 3c730184998dab2e8c637cdb54aa1366d87ac700
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
