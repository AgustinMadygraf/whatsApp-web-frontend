/*
Path: src/components/SideBar.js
Este archivo mostrará la barra lateral de la aplicación.
*/

import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Pusher from "pusher-js";
import "./sidebar.css";
import SideBarChat from "./SideBarChat";
import { useSelector, useDispatch } from "react-redux";
import { getRooms, updateRoomData } from "../redux/messages/messages-actions";

const SideBar = () => {
  const [rooms, setRooms] = useState();

  const user = useSelector((state) => state.rooms.user);
  const roomsData = useSelector((state) => state.rooms.rooms);

  const dispatch = useDispatch();

  // Efecto para obtener las salas iniciales
  useEffect(() => {
    console.log("Ejecutando useEffect para obtener salas");
    dispatch(getRooms());
  }, [roomsData, rooms, dispatch]);

  // Efecto para actualizar el estado interno de rooms con roomsData
  useEffect(() => {
    console.log("Actualizando el estado interno de rooms con roomsData:", roomsData);
    setRooms(roomsData);
  }, [roomsData, rooms]);

  // Efecto para configurar Pusher - canal "messages"
  useEffect(() => {
    console.log("Configurando Pusher para el canal 'messages'");
    const pusher = new Pusher("945758d3b6566a1295a9", { cluster: "ap2" });
    const channel = pusher.subscribe("messages");

    channel.bind("inserted", (data) => {
      console.log("Evento 'inserted' recibido con data:", data);
      dispatch(updateRoomData(data));
    });

    return () => {
      console.log("Limpiando suscripción a Pusher del canal 'messages'");
      channel.unsubscribe();
      channel.unbind();
    };
  }, [dispatch]);

  // Efecto para configurar Pusher - canal "message" (actualización de mensajes)
  useEffect(() => {
    console.log("Configurando Pusher para el canal 'message'");
    const pusher = new Pusher("945758d3b6566a1295a9", { cluster: "ap2" });
    const channel = pusher.subscribe("message");

    channel.bind("updated", (data) => {
      console.log("Evento 'updated' recibido con data:", data);
      dispatch(getRooms());
    });

    return () => {
      console.log("Limpiando suscripción a Pusher del canal 'message'");
      channel.unsubscribe();
      channel.unbind();
    };
  }, [dispatch]);

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
        <SideBarChat addNewChat="hello" />
        {rooms && rooms.map((room) => (
          <SideBarChat key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
