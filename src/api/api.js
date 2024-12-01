/*
Path: src/api/api.js
Este archivo contendrá todas las funciones que se comunicarán con el backend.
*/

import axios from "axios";

export const getRooms = async () => {
  try {
    const rooms = await axios.get("http://localhost:3030/posts/room");
    return rooms;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleRoom = async (id) => {
  try {
    const room = await axios.get(`http://localhost:3030/posts/room/${id}`);
    return room;
  } catch (error) {
    console.log(error);
  }
};

export const addMessage = async (data) => {
  try {
    const url = `http://localhost:3030/posts/room/${data.id}`;
    console.log("running");
  } catch (error) {
    console.log(error);
  }
};
