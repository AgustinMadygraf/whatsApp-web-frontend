/*
Path: src/components/SideBar.js
Este es el componente SideBar que se muestra en la pantalla principal de la aplicación.
*/

import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./sidebar.css";
import SideBarChat from "./SideBarChat";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Datos simulados de las salas
const mockRoomsData = [
  { _id: "1", name: "Room 1", roomMessages: [{ message: "Hello Room 1" }] },
  { _id: "2", name: "Room 2", roomMessages: [{ message: "Hello Room 2" }] },
];

const SideBar = () => {
  const [rooms, setRooms] = useState(mockRoomsData);
  const user = useSelector((state) => state.rooms.user);
  const navigate = useNavigate();

  // Mostrar el estado inicial de las salas para depuración
  console.log("Salas iniciales:", rooms);

  // Función para añadir una nueva sala
  const addNewChat = () => {
    const roomName = prompt("Por favor, ingrese el nombre de la nueva sala de chat:");

    if (roomName && roomName.trim() !== "") {
      const newRoom = {
        _id: `${rooms.length + 1}`,
        name: roomName.trim(),
        roomMessages: [],
      };
      setRooms((prevRooms) => [...prevRooms, newRoom]);
      console.log("Nueva sala añadida exitosamente:", newRoom);
    } else {
      console.warn("No se ingresó un nombre válido para la sala.");
    }
  };

  // Manejar el clic en una sala
  const handleRoomClick = (roomId) => {
    const roomExists = rooms.find((room) => room._id === roomId);
    if (roomExists) {
      console.log("Navegando a la sala:", `/rooms/${roomId}`);
      navigate(`/rooms/${roomId}`);
    } else {
      console.error("Error: Sala con ID no encontrada:", roomId);
      alert(`La sala con ID ${roomId} no existe.`);
    }
  };

  return (
    <div className="sideBar">
      {/* Encabezado de la barra lateral */}
      <div className="sideBar_header">
        <Avatar src={user?.photoURL} alt={user?.displayName || "Usuario"} />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* Búsqueda en la barra lateral */}
      <div className="sideBar_search">
        <div className="searchBar_container">
          <SearchIcon />
          <input type="text" placeholder="Buscar o iniciar nuevo chat" />
        </div>
      </div>

      {/* Listado de salas */}
      <div className="sideBar_chat">
        <SideBarChat addNewChat={addNewChat} />
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <SideBarChat
              key={room._id}
              room={room}
              onClick={handleRoomClick}
            />
          ))
        ) : (
          <p>No hay salas disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default SideBar;
