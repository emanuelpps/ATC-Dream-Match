
# ATC Dream Match

## Descripción General
ATC Dream Match es una aplicación web diseñada para gestionar y organizar partidos de equipos. Ofrece funcionalidades para la selección de jugadores, gestión de equipos. Este proyecto está construido utilizando Next.js, TypeScript y Tailwind CSS.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

- **`public/`**: Contiene activos estáticos como imágenes y otros archivos accesibles públicamente.
  - **`assets/`**
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
- **`setRemovePlayersFromTeam(players: string)`**: Elimina un jugador de un equipo y lo restablece a la lista de jugadores.
- **`addPlayerToTeam(player: string)`**: Añade un jugador a un equipo.
- **`scheduleMatch(date: string, teams: Team[])`**: Programa un partido entre los equipos especificados en la fecha dada.

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

