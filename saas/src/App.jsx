import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import HeaderPage from "./Components/HeaderPage";
import Navbar from "./Components/Navbar"
import "./App.css";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/HeaderPage",
          element: <HeaderPage />,
        },
        {
          path: "/Navbar",
          element: <Navbar />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
