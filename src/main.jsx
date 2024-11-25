import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";



const router = createBrowserRouter([
  {
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
         /*
         react-router-dom v7 does not support nested routes anymore, like v6 does:
           // v6 nesting routing would look like this (with no nested routes here):
          path: "/projects",
          element: <ProjectsPage />,
          */
         // v7 routing with nested routes required to split the nested routes into children array:
          path: "/projects",
            children: [
                { path: "", element: <ProjectsPage /> }, // For /projects base route (existing one)
                { path: "*", element: <ProjectsPage /> } // For routes under /projects/*
            ]
        },
    ]
  },
], {
    future: {
        v7_relativeSplatPath: true
    }
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
);
