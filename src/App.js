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
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/messages/messages-actions";
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
        element: <div className="not-found">404 - Página no encontrada</div>,
      },
    ],
  },
]);

function App() {
  const user = useSelector((state) => state.rooms.user);
  const dispatch = useDispatch();

  // Restaurar usuario desde localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        dispatch(setUser(JSON.parse(storedUser)));
      }
    } catch (error) {
      console.error("Error al restaurar usuario desde localStorage:", error);
    }
  }, [dispatch]);

  // Depuración del estado global del usuario
  useEffect(() => {
    console.log("Usuario actual desde Redux:", user);
  }, [user]);

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
