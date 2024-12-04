/*
Path: src/api/api.js
Este archivo contendrá las funciones que se encargarán de realizar las peticiones a la API.
*/

import axios from "axios";

// URL base de la API (podrías parametrizarla si lo requieres)
const BASE_URL = "http://localhost:3030/posts/room";

export const getRooms = async () => {
  console.log("Iniciando petición GET para obtener todas las salas...");
  try {
    const rooms = await axios.get(BASE_URL);
    console.log("Salas obtenidas correctamente:", rooms.data);
    return rooms;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
};

export const addRooms = async (data) => {
  console.log("Intentando añadir una nueva sala:", data);
  try {
    if (!data.name || !data.roomMessages) {
      throw new Error("Invalid data: 'name' and 'roomMessages' are required");
    }

    const response = await axios.post(BASE_URL, {
      name: data.name,
      roomMessages: {
        name: data.roomMessages.name,
        message: data.roomMessages.message,
      },
    });
    console.log("Sala añadida correctamente:", response.data);
    return response;
  } catch (error) {
    console.error("Error adding room:", error);
    throw error;
  }
};

export const getSingleRoom = async (id) => {
  console.log(`Obteniendo datos de la sala con ID: ${id}`);
  try {
    if (!id) {
      throw new Error("Invalid ID: 'id' is required");
    }

    const room = await axios.get(`${BASE_URL}/${id}`);
    console.log(`Datos de la sala ${id}:`, room.data);
    return room;
  } catch (error) {
    console.error("Error fetching single room:", error);
    throw error;
  }
};

export const addMessage = async (data) => {
  console.log("Intentando agregar mensaje a la sala:", data);
  try {
    if (!data.id || !data.name || !data.message) {
      throw new Error("Invalid data: 'id', 'name', and 'message' are required");
    }

    const response = await axios.post(`${BASE_URL}/${data.id}`, {
      name: data.name,
      message: data.message,
    });
    console.log("Mensaje añadido correctamente:", response.data);
    return response;
  } catch (error) {
    console.error("Error adding message:", error);
    throw error;
  }
};
