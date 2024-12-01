# **To-Do List**

Este documento organiza las tareas pendientes, dividiendo las responsabilidades en pasos pequeños y asignando cada tarea a un solo archivo.

---

## **1. Resolver Advertencia: `findDOMNode` está obsoleto**

### **Archivo: `src/components/SideBar.js`**
- [ ] Reemplazar el uso de `IconButton` con el componente equivalente de `@mui/material`.
- [ ] Revisar los componentes utilizados en `SideBar` para asegurarse de que sean compatibles con React 18.

### **Archivo: `src/components/Chat.js`**
- [ ] Reemplazar el uso de `IconButton` con el componente equivalente de `@mui/material`.
- [ ] Revisar el código para asegurarse de que no dependa indirectamente de `findDOMNode`.

### **Archivo: `src/components/login/Login.js`**
- [ ] Cambiar el componente `Button` por el de `@mui/material`.
- [ ] Revisar si `Login.js` utiliza otros componentes heredados y actualizarlos si es necesario.

---

## **2. Advertencia: `Cross-Origin-Opener-Policy`**

### **Archivo: Configuración del Servidor**
- [ ] Investigar si el servidor backend permite configurar encabezados HTTP.
- [ ] Agregar los encabezados HTTP recomendados:
  ```http
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Embedder-Policy: require-corp
  ```

### **Archivo: `src/components/login/Login.js`**
- [ ] Probar el manejo de ventanas emergentes para autenticación.
- [ ] Verificar que las ventanas emergentes de Firebase no generen problemas adicionales relacionados con políticas de seguridad.

---

## **3. Advertencia: `React Router Future Flag Warning`**

### **Archivo: `src/App.js`**
- [ ] Cambiar `<BrowserRouter>` a `createBrowserRouter` y actualizar el código de enrutamiento.
- [ ] Configurar el flag `v7_startTransition` en el archivo de rutas.
- [ ] Configurar el flag `v7_relativeSplatPath` en el archivo de rutas.
- [ ] Probar que las rutas `/` y `/rooms/:roomId` funcionen correctamente después de los cambios.

---

## **4. Error: `e.target.className.indexOf` no es una función**

### **Archivo: `src/utils/mouseEvents.js`** (o donde ocurra el evento)
- [ ] Identificar el lugar exacto donde ocurre el error `e.target.className.indexOf`.
- [ ] Agregar una validación para asegurarse de que `e.target.className` sea un string:
  ```javascript
  if (typeof e.target.className === "string" && e.target.className.indexOf("some-class") !== -1) {
    // Tu lógica aquí
  }
  ```
- [ ] Probar la funcionalidad de mouse para verificar que el error no se repita.

---

## **5. Verificar Flujo de Firebase**

### **Archivo: `src/components/login/Login.js`**
- [ ] Verificar que la función `signInWithPopup` se ejecute correctamente.
- [ ] Agregar un mensaje de error claro cuando falle el inicio de sesión.
- [ ] Probar la autenticación en diferentes navegadores (Chrome, Firefox, Edge).
- [ ] Confirmar que el `dispatch` se actualice correctamente con el usuario autenticado.

---

## **6. Limpieza del Proyecto**

### **Archivo: Proyecto Completo**
- [ ] Eliminar la carpeta `node_modules` para una instalación limpia.
- [ ] Borrar el archivo `package-lock.json` para resolver conflictos de dependencias:
  ```bash
  rm -rf node_modules package-lock.json
  ```
- [ ] Reinstalar todas las dependencias con:
  ```bash
  npm install
  ```
- [ ] Probar que la aplicación funcione después de la reinstalación.
