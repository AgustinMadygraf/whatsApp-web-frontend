/*
Path: src/App.js
Este es el componente principal de la aplicación. Aquí se importan los componentes SideBar, 
Chat y Login. Además, se utiliza el hook useSelector para obtener el estado de la aplicación.
*/

import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "rooms/:roomId",
        element: <Chat />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);
console.log("Router configurado:", router);

function App() {
  const user = useSelector((state) => state.rooms.user);
  console.log("Usuario actual desde Redux:", user); // Debugging statement

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <RouterProvider router={router} />
        </div>
      )}
    </div>
  );
}

export default App;
