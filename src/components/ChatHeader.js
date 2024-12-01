/*
Path: src/components/ChatHeader.js
Este es el componente ChatHeader que se muestra en la parte superior de la pantalla de chat.
*/

import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@mui/material";
import { AttachFile, SearchOutlined, MoreVert } from "@mui/icons-material";

function ChatHeader({ roomName }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  return (
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
  );
}

export default ChatHeader;
