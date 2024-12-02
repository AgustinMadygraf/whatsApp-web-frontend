/*
Path: src/components/SideBar.js
Este archivo contiene el componente de la barra lateral de chat.
*/

import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./sidebar.css";
import SideBarChat from "./SideBarChat";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { getRooms } from "../redux/messages/messages-actions";

const SideBar = () => {
  const [rooms, setRooms] = useState([]);
  const user = useSelector((state) => state.rooms.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const roomsData = await dispatch(getRooms());
        setRooms(roomsData.payload);
      } catch (error) {
        console.error("Error al obtener las salas:", error);
      }
    };

    fetchRooms();
  }, [dispatch]);

  const handleRoomClick = (roomId) => {
    console.log("ID de la sala clickeada:", roomId);
    const roomExists = rooms.find((room) => String(room._id) === String(roomId));
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
          <LogoutButton />
        </div>
      </div>

      <div className="sideBar_search">
        <div className="searchBar_container">
          <SearchIcon />
          <input type="text" placeholder="Buscar o iniciar nuevo chat" />
        </div>
      </div>

      <div className="sideBar_chat">
        <SideBarChat addNewChat={true} />
        {rooms.length > 0 &&
          rooms.map((room, index) => (
            <SideBarChat
              key={room._id || index}
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
