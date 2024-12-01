/*
Path: src/components/LogoutButton.js
Este archivo es donde se configura el componente LogoutButton.
*/

import React from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/messages/messages-actions";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("user"); // Eliminar usuario de localStorage
        dispatch(setUser(null)); // Limpiar Redux
        console.log("Sesión cerrada exitosamente.");
      })
      .catch((err) => console.error("Error al cerrar sesión:", err));
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default LogoutButton;
