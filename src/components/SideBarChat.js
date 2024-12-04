/*
Path: src/components/SideBarChat.js
Este archivo mostrará la interfaz de las salas de chat en la barra lateral.
*/

import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./sideBarChat.css";
import { Link } from "react-router-dom";
import { addRooms } from "../api/api";

const SideBarChat = ({ addNewChat, room }) => {
//  const [messages, setMessages] = useState(""); // Aunque actualmente no se use, lo mantenemos por si lo necesitas luego.
  const [seed, setSeed] = useState("123");

  useEffect(() => {
    const newSeed = Math.floor(Math.random() * 5000);
    console.log("Generando seed para el avatar:", newSeed);
    setSeed(newSeed);
  }, []);

  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  const createChat = async () => {
    console.log("Solicitando nombre para la nueva sala de chat...");
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      console.log("Creando nueva sala de chat con nombre:", roomName);
      try {
        const data = {
          name: roomName,
          roomMessages: {
            name: "",
            message: "",
          },
        };
        await addRooms(data);
        console.log("Sala añadida exitosamente:", data);
      } catch (error) {
        console.error("Error al crear la nueva sala:", error);
      }
    } else {
      console.log("No se ingresó un nombre, cancelando creación de sala...");
    }
  };

  // Si no es para añadir un nuevo chat, mostramos la sala existente
  if (!addNewChat) {
    console.log("Renderizando sala:", room);
    return (
      <Link to={`/rooms/${room._id}`}>
        <div className="sidebarChat">
          <Avatar src={avatar} />
          <div className="sidebarChat_info">
            <h3
              style={{
                fontSize: "18px",
                color: "rgb(69 66 66)",
              }}
            >
              {room.name}
            </h3>
            <p
              style={{
                fontSize: "13px",
                marginLeft: "6px",
                marginTop: "4px",
                color: "#3a3838",
              }}
            >
              {room.roomMessages && room.roomMessages[0] && room.roomMessages[0].message !== undefined
                ? room.roomMessages[0].message + ".."
                : "..."}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // Si es para añadir una nueva sala
  console.log("Renderizando opción para añadir nueva sala...");
  return (
    <div onClick={createChat} className="sidebarChat">
      <h2
        style={{
          fontSize: "20px",
          color: "rgb(69 66 66)",
          textAlign: "center",
          flex: 1,
        }}
      >
        Add new Chat
      </h2>
    </div>
  );
};

export default SideBarChat;
