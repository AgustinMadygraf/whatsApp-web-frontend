/*
Path: src/components/Chat.js
Este archivo mostrará la interfaz de chat de la aplicación.
*/

import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons";
import MoodIcon from "@material-ui/icons/Mood";
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useState, useEffect, useCallback } from "react";
import "./chat.css";
import { useParams } from "react-router-dom";
import { getSingleRoom, addMessage } from "../api/api";
import { useSelector } from "react-redux";

function Chat() {
  const user = useSelector((state) => state.rooms.user);
  const roomsData = useSelector((state) => state.rooms.rooms);
  
  const { roomId } = useParams();
  
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("123");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  const fetchRoomData = useCallback(async () => {
    console.log("Obteniendo datos de la sala con ID:", roomId);
    try {
      const { data } = await getSingleRoom(roomId);
      console.log("Datos de la sala obtenidos:", data);
      setRoomName(data.name);
      setMessages(data.roomMessages);
    } catch (error) {
      console.error("Error al obtener datos de la sala:", error);
    }
  }, [roomId]);

  useEffect(() => {
    if (roomId) {
      console.log("roomId ha cambiado, reobteniendo datos de la sala");
      fetchRoomData();
    }
  }, [roomsData, roomId, fetchRoomData]);

  useEffect(() => {
    const newSeed = Math.floor(Math.random() * 5000);
    console.log("Generando nuevo seed para avatar:", newSeed);
    setSeed(newSeed);
  }, []);

  const btnHandler = async (e) => {
    e.preventDefault();
    console.log("Enviando mensaje:", input);

    const data = {
      id: roomId,
      name: user.displayName,
      message: input,
    };

    try {
      await addMessage(data);
      console.log("Mensaje enviado con éxito");
      setInput("");
      fetchRoomData();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={avatar} />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>Última vez visto a las {new Date().toLocaleTimeString()}</p>
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
        {messages.map((message) => (
          <p
            key={message.id}
            className={`chat_message ${message.name === user.displayName && "chat_reciever"}`}
          >
            <span className="chat_name">{message.name} </span>
            {message.message}
            <span className="chat_timestamp">
              {new Date(message.date).toLocaleTimeString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chat_footer">
        <MoodIcon />
        <form onSubmit={btnHandler}>
          <input
            type="text"
            placeholder="Escribe un mensaje"
            value={input}
            onChange={(e) => {
              console.log("Cambiando valor del input:", e.target.value);
              setInput(e.target.value);
            }}
          />
          <button type="submit">Enviar</button>
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
}

export default Chat;
