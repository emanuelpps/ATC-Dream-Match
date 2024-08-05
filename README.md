# ATC Dream Match

## Descripción General

ATC Dream Match es una aplicación web diseñada para gestionar y organizar partidos de equipos. Ofrece funcionalidades para la selección de jugadores, gestión de equipos. Este proyecto está construido utilizando Next.js, TypeScript y Tailwind CSS.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **`public/`**: Contiene activos estáticos como imágenes y otros archivos accesibles públicamente.
- **`src/`**: El directorio principal del código fuente.

  - **`app/`**

    - **`Intro/`**: Pantalla de bienvenida.

    - **`home/`**: Home de la aplicación.

      - **`components/playerSelect/`**: Maneja la visualización y gestión de jugadores seleccionados.

      - **`components/playerTeamBox/`**: Caja para mostrar los Jugadores de un equipo específico.

      - **`components/sidebar/`**: Barra lateral para la selección de jugadores y equipos.

  - **`components/`**: Componentes reutilizables.

    - **`Buttons/`**: Componente de botónes reutilizable con variantes de estilo.

    - **`MobileWidget/`**: Widget optimizado para dispositivos móviles.

  - **`services/`**: Conexion a la API.

## Componentes y Funciones Clave

### Componentes

- **Intro**: Pantalla de bienvenida.
- **PlayerSelect**: Maneja la visualización y gestión de jugadores seleccionados.
- **TeamsWrapper**: Gestiona la creación, eliminación y modificación de equipos.
- **SideBar**: Barra lateral para la selección de jugadores y equipos.
- **PlayerTeamBox**: Caja para mostrar los jugadores de un equipo específico.
- **MobileWidget**: Widget optimizado para dispositivos móviles.
- **Buttons**: Componente de botónes reutilizable con variantes de estilo.

### Funciones

- **`fetchPlayers()`**: Carga la lista de jugadores cada vez que se renderiza la home.
- **`addPlayerHandler(playerName: string)`**: Añade un jugador a la lista de jugadores seleccionados y lo marca como seleccionado.
- **`handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>)`**: Maneja el error de imagen en caso de que una imagen no se pueda cargar.
- **`setTeams(teams: string[])`**: Establece la lista de jugadores en el equipo.
- **`setTeamTitle(title: string)`**: Establece el nombre del equipo.
- **`setAddPlayersToTeam(players: string)`**: Agrega un jugador a un equipo.
- **`setIsTeamReady(ready: boolean)`**: Establece si el equipo está listo.
- **`setRemovePlayersFromTeam(players: string)`**: Elimina un jugador de un equipo y lo restablece a la lista de jugadores.
- **`addPlayerToTeam(player: string)`**: Añade un jugador a un equipo.
-**`handleDeleteTeam(team: string)`**: Elimina un equipo y restablece valores por default.
-**`setIsSideBarShow(ready: boolean)`**: Despliega o oculta la barra lateral en version mobile.

## Ejecutar el Proyecto Localmente

Seguir estos pasos para ejecutar el proyecto localmente:

1. **Clona el repositorio**:

   ```bash
   git clone "https://github.com/emanuelpps/ATC-Dream-Match"
   cd atc-dream-match
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

3. **Ejecuta el servidor de desarrollo**:

   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

4. **Abre la aplicación**:
   Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.
