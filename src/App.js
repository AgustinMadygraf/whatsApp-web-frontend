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
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

function App() {
  const user = useSelector((state) => state.rooms.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Restaurar usuario desde localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
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
