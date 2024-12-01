/*
Path: src/components/SideBar.js
Este es el componente SideBar que se muestra en la pantalla principal de la aplicación.
*/

import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./sidebar.css";
import SideBarChat from "./SideBarChat";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const mockRoomsData = [
  { _id: "1", name: "Room 1", roomMessages: [{ message: "Hello Room 1" }] },
  { _id: "2", name: "Room 2", roomMessages: [{ message: "Hello Room 2" }] },
];

const SideBar = () => {
  const [rooms, setRooms] = useState(mockRoomsData);
  const user = useSelector((state) => state.rooms.user);
  const navigate = useNavigate();

  const addNewChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      const newRoom = {
        _id: `${rooms.length + 1}`,
        name: roomName,
        roomMessages: [],
      };
      setRooms([...rooms, newRoom]);
    }
  };

  const handleRoomClick = (roomId) => {
    console.log("Room clickeado:", roomId);
    navigate(`/rooms/${roomId}`);
  };

  return (
    <div className="sideBar">
      <div className="sideBar_header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sideBar_search">
        <div className="searchBar_container">
          <SearchIcon />
          <input type="text" placeholder="Search or start new" />
        </div>
      </div>
      <div className="sideBar_chat">
        <SideBarChat addNewChat={addNewChat} />
        {rooms &&
          rooms.map((room) => (
            <SideBarChat key={room._id} room={room} onClick={() => handleRoomClick(room._id)} />
          ))}
      </div>
    </div>
  );
};

export default SideBar;
