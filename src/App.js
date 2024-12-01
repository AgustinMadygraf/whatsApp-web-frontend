/*
Path: src/App.js
Este es el componente principal de la aplicación. Aquí se importan los componentes SideBar, 
Chat y Login. Además, se utiliza el hook useSelector para obtener el estado de la aplicación.
*/

import React, { useEffect } from "react";
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

function App() {
  const user = useSelector((state) => state.rooms.user);

  // Depuración del estado global del usuario
  useEffect(() => {
    console.log("Usuario actual desde Redux:", user);
  }, [user]);

  // Validar si el usuario está definido
  if (!user) {
    console.warn("Usuario no encontrado. Redirigiendo al login...");
  }

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
