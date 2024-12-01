/*
Path: src/utils/auth.js
Este archivo contiene la función logout que cierra la sesión del usuario actual.
*/

import { auth } from "../firebase";
import { setUser } from "../redux/messages/messages-actions";

export const logout = (dispatch) => {
  auth
    .signOut()
    .then(() => {
      localStorage.removeItem("user"); // Eliminar usuario de localStorage
      dispatch(setUser(null)); // Limpiar Redux
      console.log("Sesión cerrada exitosamente.");
    })
    .catch((err) => console.error("Error al cerrar sesión:", err));
};
