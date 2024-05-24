import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/project/:id",
          element: <ProjectPage />,
        },
        {
          path: "/contact-page",
          element: <ContactPage />,
        },]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
);