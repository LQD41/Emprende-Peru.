# Emprende Perú — V25

Juego educativo HTML / JavaScript para PC y móviles. Campañas S.A. y S.R.L. y capítulo especial «Pollo?».

## Publicación en GitHub Pages

1. Crea un repositorio **público** en GitHub (por ejemplo, `emprende-peru`).
2. Sube el **contenido descomprimido** de esta carpeta a la raíz del repositorio, conservando esta estructura:

   ```text
   index.html
   game.js
   pollo-animation.js
   assets/
   README.md
   ```

   **No subas el ZIP como único archivo.** Con más de 100 archivos, es más cómodo usar GitHub Desktop o Git desde tu PC para publicar el proyecto completo; la carga por navegador puede tener límites por tanda.
3. Abre **Settings → Pages → Build and deployment → Deploy from a branch** y selecciona **main** y **/(root)**. Guarda los cambios.
4. Espera la publicación de GitHub Pages. La URL quedará parecida a `https://TU-USUARIO.github.io/emprende-peru/`.
5. Cada nueva versión se publica actualizando los archivos del repositorio y haciendo un nuevo commit.

## Música

La música ambiental está configurada para reproducirse en bucle desde la dirección compartida:

`https://files.catbox.moe/q31js3.mp3`

El enlace se utiliza directamente en `game.js` (`BACKGROUND_MUSIC_URL`); **el MP3 no está incluido físicamente en el ZIP**, ya que no pudo descargarse en este entorno. La reproducción depende de la disponibilidad de Catbox y de la conexión a internet del jugador.

Para independizarte de ese servicio y asegurar la música en GitHub Pages:

- Descarga el MP3 desde esa dirección en tu PC.
- Guarda el archivo como `assets/musica-fondo-ranko.mp3`.
- Cambia en `game.js` la constante `BACKGROUND_MUSIC_URL` por `'assets/musica-fondo-ranko.mp3'`.
- Vuelve a subir ambos archivos a GitHub.

La música empieza únicamente cuando pulsas «Jugar» o «Continuar partida» (o al confirmar una nueva partida). No suena en el menú principal, Ajustes ni Créditos del inicio, y se pausa al regresar al menú. Los navegadores permiten reproducir audio después de esa interacción. Se controla con el volumen de Ajustes, y se pausa durante el evento del Pollo, que conserva su música especial. Asegúrate de tener permiso para compartir públicamente la pista.

## Cambios V25

- Campaña de kekes: Sociedad Anónima (S.A.) en lugar de Sociedad Anónima Cerrada (S.A.C.).
- Campaña de abarrotes: Sociedad Comercial de Responsabilidad Limitada (S.R.L.), sin cambios.
- Se actualizaron nombres, diálogos, menús, créditos y la aclaración educativa sobre el directorio.
- Las partidas existentes de la campaña S.A.C. se reconocen automáticamente como S.A. sin borrar el progreso.
- No se modificaron las imágenes, música, mecánicas, eventos ni otras funciones.

## Cambios V24

- La música ambiental comienza solamente después de iniciar o continuar una partida.
- No suena al abrir la página ni al navegar por el menú principal.
- Se pausa al volver al menú y conserva el volumen de Ajustes y las canciones especiales del Pollo.

## Cambios V23

- Retrato del protagonista alineado dentro del cuadro de diálogo (PC y móvil).
- Cinemáticas muestran «PROTAGONISTA» en vez del nombre de prueba del guardado, sin alterar el nombre personalizable fuera de ellas.
- Fondo de cinemática adaptado a pantallas verticales.
- Música de fondo en bucle enlazada a la URL facilitada.
- Créditos del menú y créditos del final: **Juego hecho por Ranko (desconocido)**, con la imagen original proporcionada.
- Se conservan el progreso local, el flujo de misiones y los recursos originales de la V22.

**Nota:** el progreso se guarda con `localStorage` del navegador en el dispositivo de cada jugador. Al cambiar de origen (archivo local → GitHub Pages), las partidas guardadas anteriormente no se transfieren automáticamente.
