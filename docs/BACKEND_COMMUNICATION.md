# Guía de Comunicación con el Backend

Esta guía proporciona información sobre cómo el frontend se comunica con el backend. Incluye detalles sobre los endpoints utilizados, el formato de los datos, y la estructura de las solicitudes y respuestas.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Endpoints del Backend](#endpoints-del-backend)
  - [Autenticación](#autenticación)
  - [Mensajería](#mensajería)
  - [Gestión de Salas](#gestión-de-salas)
- [Formato de Solicitudes y Respuestas](#formato-de-solicitudes-y-respuestas)
- [Estructura del Adaptador](#estructura-del-adaptador)
- [Ejemplos de Integración](#ejemplos-de-integración)

---

## Descripción General

El frontend de este proyecto se comunica con el backend mediante una serie de endpoints REST. El backend está diseñado para ser escalable y seguro, proporcionando funcionalidades como autenticación de usuarios, gestión de salas de chat y mensajería en tiempo real.

La comunicación entre el frontend y el backend se maneja mediante HTTP, y los datos se envían en formato JSON. Además, se está desarrollando un adaptador que permitirá al frontend interactuar con un backend en Python que ya está en producción para un proyecto similar.

## Endpoints del Backend

### Autenticación

La autenticación se realiza utilizando Firebase, pero el backend también tiene endpoints adicionales para manejar la autenticación de usuarios y tokens. Estos endpoints son:

- **POST /api/login**: Permite a los usuarios autenticarse y obtener un token de acceso.
  - **Solicitud**:
    ```json
    {
      "email": "usuario@ejemplo.com",
      "password": "tu_contraseña"
    }
    ```
  - **Respuesta**:
    ```json
    {
      "token": "jwt_token"
    }
    ```

- **POST /api/register**: Permite registrar un nuevo usuario.
  - **Solicitud**:
    ```json
    {
      "nombre": "Juan Pérez",
      "email": "usuario@ejemplo.com",
      "password": "tu_contraseña"
    }
    ```
  - **Respuesta**:
    ```json
    {
      "mensaje": "Usuario registrado con éxito"
    }
    ```

### Mensajería

Los mensajes entre los usuarios se manejan a través de los siguientes endpoints:

- **GET /api/messages/{roomId}**: Obtiene todos los mensajes de una sala específica.
  - **Respuesta**:
    ```json
    [
      {
        "usuario": "Juan Pérez",
        "mensaje": "Hola a todos",
        "timestamp": "2024-12-01T12:34:56Z"
      },
      {
        "usuario": "María Gómez",
        "mensaje": "¡Hola, Juan!",
        "timestamp": "2024-12-01T12:35:10Z"
      }
    ]
    ```

- **POST /api/messages/{roomId}**: Envía un nuevo mensaje a la sala especificada.
  - **Solicitud**:
    ```json
    {
      "usuario": "Juan Pérez",
      "mensaje": "¿Cómo están todos?"
    }
    ```
  - **Respuesta**:
    ```json
    {
      "mensaje": "Mensaje enviado con éxito"
    }
    ```

### Gestión de Salas

Los usuarios pueden crear y unirse a diferentes salas. Los endpoints para la gestión de salas incluyen:

- **POST /api/rooms**: Crea una nueva sala de chat.
  - **Solicitud**:
    ```json
    {
      "nombre": "Sala de Amigos"
    }
    ```
  - **Respuesta**:
    ```json
    {
      "roomId": "123456",
      "mensaje": "Sala creada con éxito"
    }
    ```

- **GET /api/rooms**: Obtiene una lista de todas las salas disponibles.
  - **Respuesta**:
    ```json
    [
      {
        "roomId": "123456",
        "nombre": "Sala de Amigos"
      },
      {
        "roomId": "789012",
        "nombre": "Sala de Trabajo"
      }
    ]
    ```

## Formato de Solicitudes y Respuestas

Todas las solicitudes al backend deben incluir un encabezado `Content-Type: application/json` para especificar que los datos se envían en formato JSON. Si se requiere autenticación, también se debe incluir un encabezado `Authorization` con el token JWT proporcionado después de iniciar sesión.

### Ejemplo de Encabezado de Solicitud
```http
Authorization: Bearer jwt_token
Content-Type: application/json
```

## Estructura del Adaptador

El adaptador se encargará de conectar el frontend con el backend escrito en Python. La idea del adaptador es traducir las solicitudes del frontend en un formato compatible con el backend existente, permitiendo así la interoperabilidad entre ambos sistemas. La estructura del adaptador incluye:

- **Controladores de Solicitudes**: Intercepta las solicitudes del frontend y las adapta según los requerimientos del backend Python.
- **Manejo de Errores**: El adaptador incluye mecanismos para manejar errores comunes y asegurar la respuesta adecuada al frontend.
- **Compatibilidad con REST y WebSockets**: El adaptador manejará tanto las solicitudes REST como las conexiones WebSocket para garantizar que las comunicaciones en tiempo real funcionen sin problemas.

## Ejemplos de Integración

A continuación, se muestra un ejemplo de cómo integrar el envío de un mensaje desde el frontend al backend utilizando el adaptador:

```javascript
async function enviarMensaje(roomId, usuario, mensaje) {
  const respuesta = await fetch(`/api/messages/${roomId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tuToken}`
    },
    body: JSON.stringify({ usuario, mensaje })
  });
  const datos = await respuesta.json();
  if (respuesta.ok) {
    console.log('Mensaje enviado:', datos.mensaje);
  } else {
    console.error('Error al enviar mensaje:', datos.error);
  }
}
```

Este ejemplo ilustra cómo el frontend puede interactuar con el backend, pasando el `roomId`, el `usuario` y el `mensaje` al endpoint correspondiente.

---

Si tienes alguna pregunta o necesitas más información sobre cómo comunicarte con el backend, no dudes en abrir un "issue" en el repositorio o consultar la documentación oficial del proyecto.

[Volver al README](../README.md)

