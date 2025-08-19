import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Hero from "./Components/HeaderPage1";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/Hero",
          element: <Hero />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
