# Guía de Contribución

Gracias por tu interés en contribuir a este proyecto. Apreciamos cualquier tipo de colaboración para mejorar el proyecto y hacer que sea más útil para todos. A continuación te proporcionamos algunas directrices para asegurarnos de que tus contribuciones sean coherentes con el resto del proyecto.

## Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
  - [Reportar Errores](#reportar-errores)
  - [Solicitar Nuevas Características](#solicitar-nuevas-características)
  - [Enviar Cambios](#enviar-cambios)
  - [Revisión de Código](#revisión-de-código)
- [Estilo de Código](#estilo-de-código)
- [Pruebas](#pruebas)

---

## Código de Conducta

Este proyecto sigue un código de conducta simple: trata a los demás como te gustaría ser tratado. Se espera que todos los contribuyentes y usuarios respeten a los demás participantes y se comporten de manera profesional en todo momento.

## Cómo Contribuir

### Reportar Errores

Si encuentras un error, por favor crea un nuevo "issue" en el repositorio. Asegúrate de incluir información detallada sobre el error, como los pasos para reproducirlo, el comportamiento esperado y lo que sucedió realmente. Si es posible, incluye capturas de pantalla o código de ejemplo.

### Solicitar Nuevas Características

Nos encantan las nuevas ideas. Si tienes una sugerencia para mejorar el proyecto, por favor crea un "issue" describiendo la nueva característica que te gustaría ver. Asegúrate de proporcionar tantos detalles como sea posible sobre por qué esta característica sería útil y cómo debería funcionar.

### Enviar Cambios

1. **Fork del Repositorio**: Haz un fork del repositorio para tener una copia en tu propia cuenta de GitHub.
2. **Crear una Rama**: Crea una rama para realizar los cambios.
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Realiza Cambios**: Haz los cambios necesarios y realiza los commits.
   ```bash
   git commit -m "Añadir nueva funcionalidad"
   ```
4. **Sincroniza tu Rama**: Asegúrate de que tu rama está actualizada con la rama principal del proyecto.
   ```bash
   git pull origin main
   ```
5. **Envía los Cambios**: Envía tu rama al repositorio de GitHub.
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
6. **Crea un Pull Request**: Crea un pull request desde tu rama. Describe los cambios que hiciste y por qué son útiles para el proyecto.

### Revisión de Código

Para asegurar la calidad del proyecto, todas las contribuciones deben ser revisadas antes de ser fusionadas. Cuando crees un pull request, será revisado por uno o más mantenedores del proyecto. Durante la revisión de código, los revisores pueden:

- Hacer comentarios sobre el estilo de código o la lógica.
- Sugerir cambios para mejorar la claridad o eficiencia del código.
- Pedir pruebas adicionales si lo consideran necesario.

Por favor, sé receptivo a los comentarios y realiza las modificaciones solicitadas. La colaboración durante la revisión de código es clave para mantener la calidad del proyecto.

## Estilo de Código

Para mantener la coherencia en todo el proyecto, asegúrate de seguir las pautas de estilo de código establecidas. En este proyecto utilizamos las siguientes guías:

- **Indentación**: Usa 2 espacios para la indentación.
- **Nombres de Variables**: Utiliza nombres descriptivos y utiliza el estilo `camelCase` para JavaScript y `snake_case` para variables en Python.
- **Comentarios**: Comenta tu código cuando sea necesario, para ayudar a otros a comprender tus cambios.
- **Linting**: Ejecuta el linter antes de realizar un commit para asegurarte de que tu código cumpla con los estándares del proyecto.

## Pruebas

Las pruebas son esenciales para asegurar la calidad del proyecto. Por favor, asegúrate de incluir pruebas unitarias para cualquier nueva funcionalidad que agregues. Si estás arreglando un error, intenta añadir una prueba que verifique que el error no vuelva a aparecer en el futuro.

Ejecuta todas las pruebas antes de enviar tus cambios:
```bash
npm test
```

Si tienes alguna pregunta o necesitas ayuda, no dudes en abrir un "issue". Estamos aquí para ayudarte a contribuir de la mejor manera posible.

---

Gracias de nuevo por tu interés en contribuir. Con tu ayuda, podemos hacer que este proyecto sea mejor para todos.

[Volver al README](../README.md)

