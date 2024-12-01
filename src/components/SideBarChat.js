/*
Path: src/components/SideBarChat.js
Este archivo contendrá el componente de la barra lateral de chat.
*/

import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./sideBarChat.css";
import { Link } from "react-router-dom";

const SideBarChat = ({ addNewChat, room }) => {
  const [seed, setSeed] = useState("123");
  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      //data base stuff

    }
  };

  return !addNewChat ? (
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
            {room.roomMessages[0].message !== undefined
              ? room.roomMessages[0]?.message +   ".."
              : "..."}
          </p>
        </div>
      </div>
    </Link>
  ) : (
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
