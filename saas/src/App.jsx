import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import HeaderPage from "./Components/HeaderPage";
import Navbar from "./Components/Navbar";
import MarqueeDemo from "./Components/Testimonal";
import PopUp from "./Components/pop"
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
        },
        {
          path: "/MarqueeDemo",
          element: <MarqueeDemo />,
        },
        {
          path: "/PopUp",
          element: <PopUp />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
