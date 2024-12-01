# **To-Do List: Desarrollo del Frontend**

Este documento detalla las tareas pendientes para el desarrollo del frontend de la aplicación tipo WhatsApp.

---

## **1. Arreglar las rutas y navegación**
- [ ] Revisar la estructura de rutas en `App.js`.
- [ ] Verificar que las rutas `/rooms/:roomId` y `/` se rendericen correctamente.
- [ ] Probar la navegación entre componentes (`Chat` y `SideBar`) para asegurar funcionalidad.

---

## **2. Simular datos en `Chat` y `SideBar`**
- [ ] Reemplazar llamadas a API en `Chat.js` con datos simulados.
- [ ] Crear datos mock para `rooms` en `SideBar` y renderizar correctamente.
- [ ] Verificar que los datos simulados se actualicen en el estado local.

---

## **3. Asegurar estados iniciales con Redux**
- [ ] Definir un estado inicial para `rooms.user` y `rooms.rooms`.
- [ ] Validar que los selectores de Redux (`useSelector`) no arrojen errores.
- [ ] Probar que los datos iniciales se reflejen correctamente en la UI.

---

## **4. Validar el diseño y funcionalidad de los componentes**
- [ ] Probar el comportamiento de los componentes `SideBar` y `Chat`.
- [ ] Simular la selección de una sala (`roomId`) y su carga en el componente `Chat`.
- [ ] Verificar que `SideBar` actualice la lista de salas correctamente.

---

## **5. Estilizar y mejorar la interfaz**
- [ ] Revisar los estilos actuales en `App.css` y `chat.css`.
- [ ] Ajustar los estilos para pantallas de diferentes tamaños (diseño responsivo).
- [ ] Usar Material-UI (`@mui/material`) para mejorar la consistencia visual.

---

## **6. Manejar errores y estados vacíos**
- [ ] Agregar mensajes de error para cuando no haya datos en `Chat` o `SideBar`.
- [ ] Mostrar un estado vacío (e.g., "No hay mensajes aún") cuando sea necesario.
- [ ] Manejar errores en funciones simuladas, como llamadas a datos mock.

---

## **7. Simular interacciones con mensajes**
- [ ] Implementar la lógica de envío de mensajes en `Chat` con datos locales.
- [ ] Actualizar el estado local de mensajes al enviar uno nuevo.
- [ ] Probar que los mensajes enviados se rendericen correctamente en la vista.

---

## **8. Verificar Firebase y autenticación**
- [ ] Confirmar que la autenticación con Firebase funciona correctamente.
- [ ] Validar que el usuario autenticado se almacene en el estado global (`rooms.user`).
- [ ] Probar el flujo de inicio y cierre de sesión.

---

## **9. Preparar la integración con el backend**
- [ ] Documentar los endpoints necesarios para la integración.
- [ ] Definir las estructuras de datos esperadas (e.g., mensajes, salas).
- [ ] Planificar las pruebas de integración cuando el backend esté listo.

---

### **Notas adicionales**
- Priorizar las tareas de navegación y simulación de datos para tener una UI funcional rápidamente.
- Realizar pruebas frecuentes en diferentes navegadores para asegurar compatibilidad.
- Mantener este documento actualizado a medida que se completen las tareas.

---

**Autor:** Agustín  
**Fecha:** 2024-12-01
