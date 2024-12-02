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
import { getSingleRoom } from "../api/api";

function Chat() {
  const user = useSelector((state) => state.rooms.user);
  const { roomId } = useParams(); // roomId siempre será una cadena
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("Cargando datos para roomId:", roomId);

    // Obtén los datos de la sala desde el servidor
    const fetchRoomData = async () => {
      try {
        const roomData = await getSingleRoom(roomId);
        if (roomData) {
          console.log("Room encontrado:", roomData.data);
          setRoomName(roomData.data.name);
          setMessages(roomData.data.roomMessages);
        } else {
          console.error("Room no encontrado para roomId:", roomId);
          setRoomName("Room no encontrado");
          setMessages([]);
        }
      } catch (error) {
        console.error("Error al obtener los datos de la sala:", error);
        setRoomName("Error al cargar la sala");
        setMessages([]);
      }
    };

    fetchRoomData();
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
