import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./chat.css";

function Chat() {
  const [seed, setSeed] = useState("123");
  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={avatar} />

        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>last seen at ...</p>
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
      {/* chat body */}
      <div className="chat_body">
         <p className="chat_message chat_reciever">
             <span className="chat_name">Manohar </span>
             Hey guys whats APP
             <span className="chat_timestamp">16:43 pm</span>
         </p>
      </div>

      {/* chat footer */}
      <div className="chat_footer">
        
      </div>

    </div>
  );
}

export default Chat;