/*
Path: src/components/Chat.js
Este es el componente Chat que se muestra en la pantalla principal de la aplicación.
*/

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons";
import MoodIcon from "@material-ui/icons/Mood";
import MicNoneIcon from "@material-ui/icons/MicNone";
import "./chat.css";

const mockRoomData = {
  name: "Mock Room",
  roomMessages: [
    { id: 1, name: "User1", message: "Hello!", date: new Date() },
    { id: 2, name: "User2", message: "Hi there!", date: new Date() },
  ],
};

function Chat() {
  const user = useSelector((state) => state.rooms.user);
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("123");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);

  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  useEffect(() => {
    if (roomId) {
      setRoomName(mockRoomData.name);
      setMessages(mockRoomData.roomMessages);
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const btnHandler = (e) => {
    e.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      name: user.displayName,
      message: input,
      date: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={avatar} />

        <div className="chat_headerInfo">
          <h3>{roomName}</h3>

          <p>last seen at {new Date().toLocaleTimeString()}</p>
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
            className={`chat_message ${
              message.name === user.displayName && "chat_reciever"
            }`}
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
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={btnHandler}>
            Send
          </button>
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
}

export default Chat;