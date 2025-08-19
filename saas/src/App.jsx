import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Hero from "./Components/HeaderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Services } from "./Components/Services";
import { Contact } from "./Components/Contact";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
