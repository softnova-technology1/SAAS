import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import RootLayout from "./Components/RootLayout";
import Hero from "./Components/HeaderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
        { path: "/contact", element: <ContactUs /> }, 
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
