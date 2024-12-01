/*
Path: src/components/Chat.js
Este es el componente Chat que se muestra en la pantalla principal de la aplicación.
*/

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./chat.css";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

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
  const user = useSelector((state) => state.rooms.user);
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      console.log("Cargando datos del room:", roomId);

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

  const handleSendMessage = (message) => {
    if (!message.trim()) {
      console.warn("El mensaje está vacío. No se enviará.");
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      name: user?.displayName || "Anónimo",
      message: message.trim(),
      date: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    console.log("Mensaje enviado:", newMessage);
  };

  return (
    <div className="chat">
      <ChatHeader roomName={roomName} />
      <ChatBody messages={messages} user={user} />
      <ChatFooter onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Chat;
