/*
Path: src/components/ChatFooter.js
Este es el componente ChatFooter que se muestra en la parte inferior de la pantalla de chat.
*/

import React, { useState } from "react";
import MoodIcon from "@mui/icons-material/Mood";
import MicNoneIcon from "@mui/icons-material/MicNone";

function ChatFooter({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(input);
    setInput("");
  };

  return (
    <div className="chat_footer">
      <MoodIcon />
      <form onSubmit={handleSubmit}>
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
  );
}

export default ChatFooter;
