/*
Path: src/components/SideBar.js
Este archivo contiene el componente de la barra lateral de chat.
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
import LogoutButton from "./LogoutButton";
import { mockRoomsData } from "../data/mockRoomsData";

const SideBar = () => {
  const [rooms, setRooms] = useState(mockRoomsData);
  const user = useSelector((state) => state.rooms.user);
  const navigate = useNavigate();

  console.log("Salas iniciales:", rooms);

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

  const handleRoomClick = (roomId) => {
    console.log("ID de la sala clickeada:", roomId);
    const roomExists = rooms.find((room) => String(room._id) === roomId);
    if (roomExists) {
      console.log("Navegando a la sala:", `/rooms/${roomId}`);
      navigate(`/rooms/${roomId}`);
    } else {
      console.error("Error: Sala con ID no encontrada:", roomId);
    }
  }; 
  
  return (
    <div className="sideBar">
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
          <LogoutButton /> {/* Agregar LogoutButton aquí */}
        </div>
      </div>

      <div className="sideBar_search">
        <div className="searchBar_container">
          <SearchIcon />
          <input type="text" placeholder="Buscar o iniciar nuevo chat" />
        </div>
      </div>

      <div className="sideBar_chat">
        {/* Componente para agregar una nueva sala */}
        <SideBarChat addNewChat={true} />
        {/* Renderizar las salas existentes */}
        {rooms.length > 0 &&
          rooms.map((room) => (
            <SideBarChat
              key={room._id}
              room={room}
              onClick={handleRoomClick}
              addNewChat={false} 
            />
          ))}
      </div>
    </div>
  );
};

export default SideBar;
