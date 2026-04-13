import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Play from "./components/Play";
import LeaderboardPage from "./components/LeaderboardPage";
import ProfilePage from "./components/ProfilePage";
import SearchPage from "./components/SearchPage";
import List from "./components/List";
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
    },
    {
        path: "leaderboards",
        element: <LeaderboardPage />,
        children: []
    },
    {
        path: "profile",
        element: <ProfilePage />,
        children: []
    },
    {
        path: "search",
        element: <SearchPage />,
        children: []
    },
    {
        path: "list",
        element: <List />,
        children: []
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);