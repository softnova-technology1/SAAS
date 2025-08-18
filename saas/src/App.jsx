import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import HeaderPage from "./Components/HeaderPage";
import "bootstrap/dist/css/bootstrap.min.css";
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
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
