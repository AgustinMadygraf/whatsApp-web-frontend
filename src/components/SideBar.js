/*
Path: src/components/SideBar.js
Este es el componente SideBar que se muestra en la pantalla principal de la aplicación.
*/

import React, { useState} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "./sidebar.css";
import SideBarChat from "./SideBarChat";
import { useSelector } from "react-redux";

const mockRoomsData = [
  { _id: "1", name: "Room 1", roomMessages: [{ message: "Hello Room 1" }] },
  { _id: "2", name: "Room 2", roomMessages: [{ message: "Hello Room 2" }] },
];

const SideBar = () => {
  const [rooms] = useState(mockRoomsData);

  const user = useSelector((state) => state.rooms.user);

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
        <SideBarChat addNewChat={"hello"} />
        {rooms &&
          rooms.map((room) => <SideBarChat key={room._id} room={room} />)}
      </div>
    </div>
  );
};

export default SideBar;