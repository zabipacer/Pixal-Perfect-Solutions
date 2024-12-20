import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// The layout with Navbar and Footer
import App from "./App"; // The home page

import Layout from "./Layout";


import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import About from "./components/About";
import GymCase from "./components/Gymcase";
import TimberCase from "./components/Timbercase";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, // Always show Layout (with Navbar & Footer)
    children: [
      {
        path: "/", // Home route
        element: <App />, // Show App component in the Layout
      },
      {
        path: "Portfolio", // Dynamic route for species detail
        element: <Portfolio />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "Pricing", // Dynamic route for species detail
        element: <Pricing />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "about", // Dynamic route for species detail
        element: <About />, // Show SpeciesDetail component in the Layout
      }, 
      {
        path: "gymcase", // Dynamic route for species detail
        element: <GymCase />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "timbercase", // Dynamic route for species detail
        element: <TimberCase />, // Show SpeciesDetail component in the Layout
      },
      // Add more routes here as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);