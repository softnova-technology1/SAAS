import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import RootLayout from "./Components/RootLayout";
import Hero from "./Components/HeaderPage";
import "bootstrap/dist/css/bootstrap.min.css";
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
          path: "/Hero",
          element: <Hero />,
        },
         {
          path: "/about",
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
