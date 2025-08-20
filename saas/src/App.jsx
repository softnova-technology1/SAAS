import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Hero from "./Components/HeaderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Team1 from "./Components/Service1";
import Team2 from "./Components/Service2";
import Team3 from "./Components/Service3";
import Project from "./Components/Project";
import Service from "./Components/Service";
import "./App.css";
import { Contactnav } from "./Components/Contactnav";
import Team from "./Components/Team";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
        index: true, 
        element: <Hero />,
      },
        { path: "/About", element: <About/> }, 
        { path: "/Team1", element: <Team1/> }, 
         { path: "/Team2", element: <Team2/> },
          { path: "/Team3", element: <Team3/> },
          { path: "/Project", element: <Project/> },
           { path: "/Contactnav", element: <Contactnav/> },
           { path: "/Team", element: <Team/> },
            { path: "/Service", element: <Service/> }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
