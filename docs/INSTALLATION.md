# Guía de Instalación

Esta guía te ayudará a instalar y configurar el proyecto en tu entorno local. Asegúrate de seguir cada paso cuidadosamente para evitar problemas durante el proceso de instalación.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
  - [Clonar el Repositorio](#clonar-el-repositorio)
  - [Instalar Dependencias](#instalar-dependencias)
  - [Configurar Variables de Entorno](#configurar-variables-de-entorno)
- [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Solución de Problemas Comunes](#solución-de-problemas-comunes)

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js**: Versión 14 o superior. Puedes descargarlo desde [aquí](https://nodejs.org/).
- **npm**: Normalmente se instala junto con Node.js.
- **Git**: Para clonar el repositorio. Puedes descargarlo desde [aquí](https://git-scm.com/).

Además, necesitarás una cuenta de Google para utilizar la funcionalidad de autenticación en la aplicación.

## Instalación

### Clonar el Repositorio

Primero, clona el repositorio en tu máquina local usando el siguiente comando:

```bash
$ git clone https://github.com/manoharys/whatsApp-web-frontend.git
```

Luego, navega al directorio del proyecto:

```bash
$ cd whatsApp-web-frontend
```

### Instalar Dependencias

Instala todas las dependencias necesarias utilizando npm:

```bash
$ npm install
```

Este comando descargará e instalará todas las dependencias del proyecto especificadas en el archivo `package.json`.

### Configurar Variables de Entorno

El proyecto requiere algunas variables de entorno para funcionar correctamente, como claves de API y configuración de Firebase. Utilizamos un archivo `.env` para almacenar esta información de manera segura.

1. Copia el archivo de ejemplo `.env.example` para crear tu propio archivo `.env`:

```bash
$ cp .env.example .env
```

2. Abre el archivo `.env` y completa los valores necesarios:

```env
REACT_APP_APIKEY=tu_api_key
REACT_APP_AUTHDOMAIN=tu_auth_domain
REACT_APP_PROJECTID=tu_project_id
REACT_APP_STORAGEBUCKET=tu_storage_bucket
REACT_APP_MESSAGINGSENDERID=tu_messaging_sender_id
REACT_APP_APPID=tu_app_id
```

Para obtener estos valores, necesitarás configurar un proyecto en [Firebase Console](https://console.firebase.google.com/). Aquí tienes una guía básica para configurarlo:

   1. **Crear un Proyecto**: Ve a Firebase Console y crea un nuevo proyecto.
   2. **Agregar una Aplicación Web**: En el panel del proyecto, selecciona "Agregar aplicación" y elige la opción de aplicación web.
   3. **Configurar Firebase Authentication**: Habilita la autenticación con Google en la sección de 'Authentication' y copia las claves de API proporcionadas.
   4. **Configurar Firestore**: Habilita Firestore Database para el almacenamiento de datos en tiempo real, si es necesario.
   5. **Copiar Credenciales**: Las credenciales proporcionadas deben ser copiadas al archivo `.env` como se muestra en el ejemplo anterior.

Sigue estas instrucciones para generar las claves necesarias y completar la configuración de Firebase.

## Ejecutar la Aplicación

Una vez que hayas instalado todas las dependencias y configurado las variables de entorno, puedes ejecutar la aplicación con el siguiente comando:

```bash
$ npm start
```

Esto iniciará un servidor de desarrollo y podrás acceder a la aplicación en tu navegador en `http://localhost:3000`.

## Solución de Problemas Comunes

- **Problema de Dependencias**: Si encuentras problemas relacionados con dependencias, prueba eliminando `node_modules` y reinstalando:

  ```bash
  $ rm -rf node_modules
  $ npm install
  ```

- **Error de Variables de Entorno**: Asegúrate de que el archivo `.env` esté correctamente configurado y que todos los valores sean válidos.

- **Puerto en Uso**: Si `http://localhost:3000` ya está ocupado, puedes especificar un puerto diferente al ejecutar la aplicación:

  ```bash
  $ PORT=3001 npm start
  ```

---

Si tienes alguna otra pregunta o encuentras problemas que no puedes solucionar, no dudes en abrir un "issue" en el repositorio. Estamos aquí para ayudarte.

[Volver al README](../README.md)

