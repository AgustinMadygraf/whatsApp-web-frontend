/*
Path: src/components/SideBarChat.js
Este archivo contiene el componente de la barra lateral de chat.
*/

import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import "./sideBarChat.css";

const SideBarChat = ({
  addNewChat = false,
  room = { _id: "default", name: "Sin nombre", roomMessages: [] },
  onClick = () => {},
}) => {
  const [seed, setSeed] = useState("123");
  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Por favor, ingrese el nombre del nuevo chat:");
    if (roomName && roomName.trim()) {
      console.log("Nueva sala creada:", roomName);
    } else {
      console.warn("Nombre de sala no válido o vacío.");
    }
  };

  const renderChatInfo = () => (
    <>
      <Avatar src={avatar} alt={room?.name || "Chat Avatar"} />
      <div className="sidebarChat_info">
        <h3 className="sidebarChat_title">{room?.name || "Sin nombre"}</h3>
        <p className="sidebarChat_lastMessage">
          {room?.roomMessages?.[0]?.message || "No hay mensajes aún."}
        </p>
      </div>
    </>
  );

  return (
    <div
      className="sidebarChat"
      onClick={
        addNewChat
          ? createChat
          : () => {
              console.log("Room clickeado con ID:", String(room._id || room.id)); // Depuración
              onClick(String(room._id || room.id)); // Cambia _id a id si es necesario
            }
      }
    >
      {addNewChat ? (
        <h2 className="sidebarChat_addNew">Agregar nuevo Chat</h2>
      ) : (
        renderChatInfo()
      )}
    </div>
  );
};

SideBarChat.propTypes = {
  addNewChat: PropTypes.bool,
  room: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    roomMessages: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string,
      })
    ),
  }),
  onClick: PropTypes.func,
};

export default SideBarChat;
