import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";

import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import One from "./pages/one/one2";
import Navigationbar from "./components/navbar/NavbarTest";
import Graphics from "./pages/graphics/index";


function App() {
  const Layout = () => {
    
    return (
      <div className="app">
<Navigationbar />
        <Outlet className="container"/>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/one",
          element: <One />,
        },
        {
          path: "/graphics",
          element: <Graphics />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;