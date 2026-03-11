import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Play from "./components/Play";
import "./index.css";
 
const router = createBrowserRouter([
   {
       path: "/",
       element: <App />,
       children: []
   },
   {
       path: "play",
       element: <Play />,
       children: []
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);