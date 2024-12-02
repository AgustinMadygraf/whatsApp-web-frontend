# WhatsApp-Web

### Aplicación Web de WhatsApp Usando el Stack MERN

Este repositorio corresponde a una aplicación web híbrida similar a WhatsApp construida con el stack MERN.

Repositorios relacionados:
- Frontend usando React y Firebase: [whatsApp-react](https://github.com/manoharys/WhatsApp-Web-React) - Comprueba el proyecto [aquí](https://whatsapp-web-233c7.web.app/)
- Repositorio del Backend: [whatsapp-web-backend](https://github.com/AgustinMadygraf/whatsapp-web-backend)

---

### Tabla de Contenidos

- [Descripción](#descripción)
- [Vista Previa](#vista-previa)
- [Cómo Usar](#cómo-usar)
  - [Instalación](#instalación)
  - [Variables de Entorno](#variables-de-entorno)
- [Características](#características)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Contribuir](#contribuir)
- [Guía de Contribución](#guía-de-contribución)
- [Guía de Instalación](#guía-de-instalación)
- [Guía de Comunicación con el Backend](#guía-de-comunicación-con-el-backend)
- [Licencia](#licencia)

---

## Descripción

Este proyecto es una implementación de una aplicación web híbrida de WhatsApp basada en salas, construida desde cero utilizando el stack MERN (MongoDB, Express, React, Node.js). Permite a los usuarios crear y unirse a salas de chat, imitando la experiencia de mensajería popular proporcionada por WhatsApp. El proyecto está construido con un enfoque en la escalabilidad, la facilidad de uso y la incorporación del sistema de autenticación de Firebase.

La intención principal de este proyecto es proporcionar una interfaz amigable entre el frontend y el backend mientras se democratiza el proceso de aprendizaje. El backend aún no está definido, pero el plan es usar un adaptador para conectarse a un backend en Python que se está utilizando para un proyecto similar ya en producción.

[Volver Arriba](#whatsapp-web)

---

## Vista Previa

A continuación se muestran algunas capturas de pantalla de la aplicación en acción:

<img src='https://github.com/AgustinMadygraf/WhatsApp-Web-React/blob/master/screenshots/Capture1.JPG' alt='Captura de Pantalla 1 de la Aplicación'>
<img src='https://github.com/AgustinMadygraf/WhatsApp-Web-React/blob/master/screenshots/Capture2.JPG' alt='Captura de Pantalla 2 de la Aplicación'>
<img src='https://github.com/AgustinMadygraf/WhatsApp-Web-React/blob/master/screenshots/Capture3.JPG' alt='Captura de Pantalla 3 de la Aplicación'>

[Volver Arriba](#whatsapp-web)

---

## Cómo Usar

### Instalación

1. Clona este repositorio:

```bash
$ git clone https://github.com/AgustinMadygraf/whatsApp-web-frontend.git
```

2. Navega al directorio del proyecto:

```bash
$ cd whatsApp-web-frontend
```

3. Instala las dependencias. Asegúrate de tener [`Node.js`](https://nodejs.org/en/) y [`npm`](https://www.npmjs.com/) instalados en tu sistema:

```bash
$ npm install
```

4. Crea un archivo `.env` en el directorio raíz para almacenar las variables de entorno necesarias. Puedes usar el archivo `.env.example` proporcionado como referencia:

```bash
$ cp .env.example .env
```

El archivo `.env` es necesario para almacenar variables de entorno importantes como la configuración de Firebase y las claves de API.

Ejemplo `.env.example`:
```
REACT_APP_APIKEY=tu_api_key
REACT_APP_AUTHDOMAIN=tu_auth_domain
REACT_APP_PROJECTID=tu_project_id
REACT_APP_STORAGEBUCKET=tu_storage_bucket
REACT_APP_MESSAGINGSENDERID=tu_messaging_sender_id
REACT_APP_APPID=tu_app_id
```

5. Inicia el servidor de desarrollo:

```bash
$ npm start
```

6. Abre tu navegador y visita `http://localhost:3000` para usar la aplicación.

7. Inicia sesión con tu cuenta de Google y crea diferentes salas para chatear.

[Volver Arriba](#whatsapp-web)

---

## Características

- **Chat en Tiempo Real**: Chatea con amigos en tiempo real utilizando salas.
- **Autenticación**: Inicio de sesión con Google para autenticar a los usuarios de manera segura.
- **Comunicación Basada en Salas**: Los usuarios pueden crear salas y chatear con los miembros dentro de la sala.
- **Diseño Responsivo**: Totalmente funcional tanto en dispositivos de escritorio como en móviles.

[Volver Arriba](#whatsapp-web)

---

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
│   ├── globalContext/       # Archivos de Context API para la gestión global del estado
│   │   ├── reducer.js       # Lógica para actualizar el estado global
│   │   └── StateProvider.js # Proveedor de estado global para la aplicación
│   ├── redux/               # Store y reducers de Redux
│   │   ├── messages/        # Reducers específicos para la gestión de mensajes
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

[Volver Arriba](#whatsapp-web)

---


## Contribuir

¡Las contribuciones son bienvenidas! Si deseas contribuir, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m 'Añadir nueva funcionalidad'`.
4. Envía la rama: `git push origin feature/nueva-funcionalidad`.
5. Envía un pull request.

Por favor, asegúrate de actualizar las pruebas según corresponda.

[Volver Arriba](#whatsapp-web)

---

## Guía de Contribución

Para obtener guías detalladas sobre cómo contribuir, consulta el archivo [CONTRIBUTING.md](docs/CONTRIBUTING.md) en la carpeta `docs`. Este archivo incluye información sobre el estilo de código, las pruebas y las mejores prácticas para garantizar la coherencia en todo el proyecto.

Si el archivo `CONTRIBUTING.md` no existe, por favor crea uno con pautas que serán útiles para los contribuyentes.

[Volver Arriba](#whatsapp-web)

---

## Guía de Instalación

Para un proceso detallado de instalación paso a paso, consulta el archivo [INSTALLATION.md](docs/INSTALLATION.md) en la carpeta `docs`. Este documento incluirá detalles adicionales sobre dependencias, configuración de Firebase y solución de problemas comunes durante la instalación.

[Volver Arriba](#whatsapp-web)

---

## Guía de Comunicación con el Backend

Para obtener más información sobre cómo este frontend se comunica con el backend, consulta el archivo [BACKEND_COMMUNICATION.md](docs/BACKEND_COMMUNICATION.md) en la carpeta `docs`. Esta guía proporcionará detalles sobre los endpoints esperados, los formatos de datos y cómo el adaptador conecta el frontend con un backend en Python.

[Volver Arriba](#whatsapp-web)

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT:

```
Licencia MIT

Copyright (c) 2021 Manohar

Por la presente se concede permiso, libre de cargos, a cualquier persona que obtenga una copia
de este software y los archivos de documentación asociados (el "Software"), para tratar
el Software sin restricción, incluidos, entre otros, los derechos de uso, copia, modificación,
unión, publicación, distribución, sublicencia y/o venta
de copias del Software, y para permitir a las personas a las que se les proporcione el Software
hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas
las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
IMPLÍCITA, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS DE COMERCIABILIDAD,
IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS
AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO O OTRA
RESPONSABILIDAD, YA SEA EN UNA ACCIÓN CONTRACTUAL, AGRAVIO O DE OTRO TIPO, QUE SURJA DE,
FUERA O EN RELACIÓN CON EL SOFTWARE O EL USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.
```

[Volver Arriba](#whatsapp-web)

