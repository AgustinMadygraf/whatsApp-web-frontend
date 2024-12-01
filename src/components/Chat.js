/*
Path: src/components/Chat.js
Este es el componente Chat que se muestra en la pantalla principal de la aplicación.
*/

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import { AttachFile, SearchOutlined, MoreVert } from "@mui/icons-material";
import MoodIcon from "@mui/icons-material/Mood";
import MicNoneIcon from "@mui/icons-material/MicNone";
import "./chat.css";

const mockRoomsData = {
  1: {
    name: "Room 1",
    roomMessages: [
      { id: 1, name: "User1", message: "Hello Room 1!", date: new Date() },
    ],
  },
  2: {
    name: "Room 2",
    roomMessages: [
      { id: 1, name: "User2", message: "Hello Room 2!", date: new Date() },
    ],
  },
};

function Chat() {
  const user = useSelector((state) => {
    console.log("Estado global completo:", state);
    return state.rooms.user;
  });
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("123");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);

  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  // Depuración del `roomId`
  console.log("Room ID actual:", roomId);

  useEffect(() => {
    if (roomId) {
      console.log("Cargando datos del room:", roomId);

      // Validar si el `roomId` existe en los datos simulados
      const roomData = mockRoomsData[roomId];
      if (roomData) {
        setRoomName(roomData.name);
        setMessages(roomData.roomMessages);
      } else {
        console.error("Room ID no encontrado:", roomId);
        setRoomName("Room no encontrado");
        setMessages([]);
      }
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const btnHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      console.warn("El mensaje está vacío. No se enviará.");
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      name: user?.displayName || "Anonimo",
      message: input.trim(),
      date: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
    console.log("Mensaje enviado:", newMessage);
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={avatar} />

        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at {new Date().toLocaleTimeString()}</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.length === 0 ? (
          <p>No hay mensajes aún</p>
        ) : (
          messages.map((message) => (
            <p
              key={message.id}
              className={`chat_message ${
                message.name === user?.displayName && "chat_reciever"
              }`}
            >
              <span className="chat_name">{message.name}</span>
              {message.message}
              <span className="chat_timestamp">
                {new Date(message.date).toLocaleTimeString()}
              </span>
            </p>
          ))
        )}
      </div>
      <div className="chat_footer">
        <MoodIcon />
        <form onSubmit={btnHandler}>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
}

export default Chat;
