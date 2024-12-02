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
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  // Función para sanitizar mensajes
  const sanitizeMessages = (msgs) => 
    msgs.map((msg) => ({
      id: msg.id || "sin-id",
      name: msg.name || "Desconocido",
      message: msg.message || "",
      date: msg.date || new Date(),
    }));

  // Función para cargar datos de la sala
  const fetchRoomData = async () => {
    console.log("Cargando datos para roomId:", roomId);
    try {
      const roomData = await getSingleRoom(roomId);
      if (roomData?.data) {
        console.log("Room encontrado:", roomData.data);
        setRoomName(roomData.data.name);
        setMessages(sanitizeMessages(roomData.data.roomMessages || []));
      } else {
        console.error("Room no encontrado para roomId:", roomId);
        setRoomName("Room no encontrado");
        setMessages([]);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la sala:", error.message);
      setRoomName("Error al cargar la sala");
      setMessages([]);
    }
  };

  // Reintento automático para cargar la sala
  const fetchRoomDataWithRetry = async (retries = 3) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        await fetchRoomData();
        return;
      } catch (error) {
        console.error(`Intento ${attempt} fallido:`, error.message);
        if (attempt === retries) {
          setRoomName("Error al cargar la sala. Intente nuevamente.");
        }
      }
    }
  };

  // Llama a la función para cargar la sala al montar el componente
  useEffect(() => {
    if (roomId) {
      fetchRoomDataWithRetry();
    } else {
      console.error("roomId no válido:", roomId);
      setRoomName("ID de sala no válido");
      setMessages([]);
    }
  }, [roomId]);

  // Manejo del envío de mensajes
  const handleSendMessage = async (message) => {
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

    // Actualiza el estado local de los mensajes
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    console.log("Mensaje enviado localmente:", newMessage);

    // Envía el mensaje al backend
    try {
      const response = await fetch(`/rooms/${roomId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el mensaje en el backend");
      }
      console.log("Mensaje guardado en el backend:", newMessage);
    } catch (error) {
      console.error("Error al enviar el mensaje al backend:", error.message);
    }
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
