# Guía de Comunicación con el Backend

Esta guía proporciona información sobre cómo el frontend se comunica con el backend. Incluye detalles sobre los endpoints utilizados, el formato de los datos y la estructura de las solicitudes y respuestas.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Endpoints del Backend](#endpoints-del-backend)
  - [Gestión de Salas](#gestión-de-salas)
  - [Mensajería](#mensajería)
- [Formato de Solicitudes y Respuestas](#formato-de-solicitudes-y-respuestas)
- [Estructura de Comunicación con el Backend](#estructura-de-comunicación-con-el-backend)
- [Ejemplos de Integración](#ejemplos-de-integración)
- [Archivos Clave para la Comunicación con el Backend](#archivos-clave-para-la-comunicación-con-el-backend)

---

## Descripción General

El frontend de este proyecto se comunica con el backend mediante una serie de endpoints REST utilizando `axios` para realizar las solicitudes HTTP. El backend está diseñado para ser escalable y seguro, proporcionando funcionalidades como gestión de salas de chat y mensajería.

La comunicación entre el frontend y el backend se maneja mediante HTTP, y los datos se envían en formato JSON.

La autenticación de usuarios se maneja a través de **Firebase Authentication**, utilizando proveedores como Google.

## Estructura de Carpetas

```
whatsApp-web-frontend/
|
├── .vscode/                 # Archivos de configuración para VSCode
├── docs/                    # Recursos relacionados con la documentación
├── node_modules/            # Dependencias de Node.js
├── public/                  # Activos públicos y archivo index.html
│   ├── index.html           # Página principal del proyecto
│   ├── logo.jpg             # Logo utilizado en la aplicación
│   ├── manifest.json        # Archivo de manifiesto para PWA
│   └── robots.txt           # Archivo para configurar el comportamiento de los motores de búsqueda
├── screenshots/             # Capturas de pantalla para la vista previa
│   ├── Capture1.JPG         # Captura de pantalla de la interfaz de usuario
│   ├── Capture2.JPG         # Captura de pantalla mostrando la funcionalidad de chat
│   └── Capture3.JPG         # Captura de pantalla de la vista previa de configuración
├── src/                     # Directorio del código fuente
│   ├── api/                 # Funciones relacionadas con la API
│   │   └── api.js           # Archivo principal para llamadas al backend
│   ├── components/          # Componentes de React
│   │   ├── login/           # Componente de login
│   │   │   ├── login.css    # Estilos específicos para el componente de login
│   │   │   └── login.js     # Componente del formulario de inicio de sesión
│   │   ├── chat.css         # Estilos específicos para el componente de chat
│   │   ├── Chat.js          # Componente del chat principal
│   │   ├── ChatBody.js      # Cuerpo del chat
│   │   ├── ChatFooter.js    # Pie de chat con caja de entrada de mensajes
│   │   ├── ChatHeader.js    # Encabezado del chat con información de la sala
│   │   ├── LogoutButton.js  # Botón de cierre de sesión
│   │   ├── sidebar.css      # Estilos específicos para el componente de barra lateral
│   │   ├── SideBar.js       # Componente de barra lateral
│   │   ├── sideBarChat.css  # Estilos para los chats de la barra lateral
│   │   └── SideBarChat.js   # Componente para cada chat listado en la barra lateral
│   ├── data/                # Archivos de datos estáticos o simulados
│   │   └── mockRoomsData.js # Datos simulados para las salas de chat
│   ├── redux/               # Store y reducers de Redux
│   │   ├── messages/        # Reducers y acciones para la gestión de mensajes y salas
│   │   ├── rootReducer.js   # Combinación de todos los reducers
│   │   └── store.js         # Configuración del store de Redux
│   ├── utils/               # Funciones utilitarias
│   │   └── auth.js          # Ayudantes de autenticación
│   ├── App.css              # Estilos específicos para el componente principal de la aplicación
│   ├── App.js               # Componente principal de la aplicación
│   ├── firebase.js          # Configuración de Firebase
│   ├── index.js             # Punto de entrada de la aplicación
│   └── reportWebVitals.js   # Métricas de rendimiento de la aplicación
├── .env                     # Variables de entorno (no compartidas)
├── .env.example             # Variables de entorno de ejemplo
├── .gitignore               # Archivos y directorios a ignorar en Git
├── package.json             # Dependencias y scripts del proyecto
├── package-lock.json        # Registro detallado de las dependencias para asegurar versiones consistentes
└── README.md                # Archivo README del proyecto
```

## Endpoints del Backend

### Gestión de Salas

Los usuarios pueden ver y unirse a diferentes salas. Los endpoints para la gestión de salas incluyen:

- **GET /posts/room**: Obtiene una lista de todas las salas disponibles. Implementado en `src/api/api.js` con la función `getRooms()` que realiza una solicitud GET a `"http://localhost:3030/posts/room"`.

  - **Respuesta**:
    ```json
    [
      {
        "_id": "123456",
        "name": "Sala de Amigos",
        "roomMessages": []
      },
      {
        "_id": "789012",
        "name": "Sala de Trabajo",
        "roomMessages": []
      }
    ]
    ```

- **GET /posts/room/{id}**: Obtiene la información de una sala específica. La función `getSingleRoom(id)` en `src/api/api.js` realiza esta solicitud con una llamada GET a la URL con el `id` de la sala.

  - **Respuesta**:
    ```json
    {
      "_id": "123456",
      "name": "Sala de Amigos",
      "roomMessages": []
    }
    ```

### Mensajería

Los mensajes entre los usuarios se manejan a través de los siguientes endpoints:

- **POST /posts/message**: Envía un nuevo mensaje a una sala.

  - **Solicitud**:
    ```json
    {
      "roomId": "123456",
      "name": "Juan Pérez",
      "message": "¿Cómo están todos?"
    }
    ```
  - **Respuesta**:
    ```json
    {
      "message": "Mensaje enviado con éxito"
    }
    ```

*Nota:* La función `addMessage(data)` en `src/api/api.js` aún no está completamente implementada y actualmente solo muestra un mensaje en consola.

## Formato de Solicitudes y Respuestas

Todas las solicitudes al backend se realizan utilizando `axios` y deben incluir un encabezado `Content-Type: application/json` para especificar que los datos se envían en formato JSON.

No se requieren encabezados de autenticación para las solicitudes al backend, ya que la autenticación se maneja en el frontend con Firebase.

### Ejemplo de Encabezado de Solicitud

```http
Content-Type: application/json
```

## Estructura de Comunicación con el Backend

La comunicación con el backend se maneja principalmente a través de los siguientes archivos:

- **`src/api/api.js`**: Contiene funciones que realizan las solicitudes HTTP al backend utilizando `axios`.

- **`src/redux/messages/messages-actions.js`**: Define las acciones de Redux relacionadas con las salas y los mensajes, y utiliza las funciones de `api.js`.

- **`src/redux/messages/messages-reducers.js`**: Maneja el estado relacionado con las salas y los mensajes en el store de Redux.

## Ejemplos de Integración

A continuación, se muestra un ejemplo de cómo obtener las salas desde el backend y almacenarlas en el estado de Redux:

```javascript
// src/redux/messages/messages-actions.js

import * as ACTIONS from "./message-actionTypes";
import * as api from "../../api/api";

export const getRooms = () => async (dispatch) => {
  try {
    const rooms = await api.getRooms();
    return dispatch({
      type: ACTIONS.GET_ROOMS,
      payload: rooms.data,
    });
  } catch (error) {
    console.log(error);
  }
};
```

En un componente React, puedes utilizar esta acción para cargar las salas:

```javascript
// src/components/SideBar.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../redux/messages/messages-actions";
import SideBarChat from "./SideBarChat";

function SideBar() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <div className="sidebar">
      {/* Renderiza las salas */}
      {rooms.map((room) => (
        <SideBarChat key={room._id} id={room._id} name={room.name} />
      ))}
    </div>
  );
}

export default SideBar;
```

## Archivos Clave para la Comunicación con el Backend

- **`src/api/api.js`**: Contiene las funciones `getRooms()`, `getSingleRoom(id)` y `addMessage(data)` que se comunican con el backend.

- **`src/redux/messages/messages-actions.js`**: Define las acciones `getRooms()`, `setUser(data)` y `addMessage(roomId, message)`.

- **`src/redux/messages/messages-reducers.js`**: Maneja el estado de `rooms`, `user` y actualiza el estado cuando se obtienen salas o se añade un mensaje.

- **`src/firebase.js`**: Configuración de Firebase para la autenticación de usuarios.

## Autenticación con Firebase

La autenticación en la aplicación se maneja utilizando **Firebase Authentication**. En `src/firebase.js`, se configura la conexión con Firebase y se exportan `auth` y `provider` para usarlos en los componentes que requieren autenticación.

Ejemplo de uso en un componente de inicio de sesión:

```javascript
// src/components/login/Login.js

import React from "react";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/messages/messages-actions";
import "./login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(setUser(result.user));
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <button onClick={signIn}>Iniciar sesión con Google</button>
    </div>
  );
}

export default Login;
```

---

Si tienes alguna pregunta o necesitas más información sobre cómo comunicarte con el backend, no dudes en abrir un "issue" en el repositorio o consultar la documentación oficial del proyecto.

[Volver al README](../README.md)
