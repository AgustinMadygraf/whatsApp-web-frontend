/*
Path: src/App.js
Este es el componente principal de la aplicación. Aquí se importan los componentes SideBar, 
Chat y Login. Además, se utiliza el hook useSelector para obtener el estado de la aplicación.
*/

import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/login/login";

function App() {
  const user = useSelector((state) => state.rooms.user);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <SideBar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element={<SideBar />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
