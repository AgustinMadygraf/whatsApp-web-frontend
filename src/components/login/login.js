/*
Path: src/components/login/login.jsPath: src/components/login/login.js
Este archivo es donde se configura el componente Login.Este archivo es donde se configura el componente Login.
*/

import React from "react";
import { Button } from "@mui/material";
import "./login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/messages/messages-actions";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    console.log("Intentando iniciar sesión con Google...");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Inicio de sesión exitoso:", user);

        // Guardar en localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Actualizar Redux
        dispatch(setUser(user));
      })
      .catch((err) => {
        console.error("Error en el inicio de sesión:", err.message);
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="/img01.jpg"
          alt="MadyBot"
        />
        <div className="login_text">
          <h6>Sign in to MadyBot</h6>
        </div>
        <Button variant="contained" color="primary" onClick={signIn}>
          Sign with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;