
# ATC Dream Match

## Descripción General
ATC Dream Match es una aplicación web diseñada para gestionar y organizar partidos de equipos. Ofrece funcionalidades para la selección de jugadores, gestión de equipos. Este proyecto está construido utilizando Next.js, TypeScript y Tailwind CSS.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

- **`public/`**: Contiene activos estáticos como imágenes y otros archivos accesibles públicamente.
  - **`assets/`**
- **`src/`**: El directorio principal del código fuente.
  - **`app/`**

    - **`Intro/`**

    - **`home/`**

      - **`components/playerSelect/`**

      - **`components/playerTeamBox/`**

      - **`components/sidebar/`**

  - **`components/`**
    - **`Buttons/`**

    - **`MobileWidget/`**

  - **`services/`**



## Componentes y Funciones Clave
### Componentes
- **PlayerSelect**: Maneja la visualización y gestión de jugadores seleccionados.
- **TeamsWrapper**: Gestiona la creación, eliminación y modificación de equipos.
- **SideBar**: Barra lateral para la selección de jugadores y equipos.
- **PlayerTeamBox**: Caja para mostrar los jugadores de un equipo específico.
- **MobileWidget**: Widget optimizado para dispositivos móviles.
- **Buttons**: Componente de botón reutilizable con variantes de estilo.

### Funciones
- **`setRemovePlayersFromTeam(players: string)`**: Elimina un jugador de un equipo.
- **`addPlayerToTeam(player: string)`**: Añade un jugador a un equipo.
- **`scheduleMatch(date: string, teams: Team[])`**: Programa un partido entre los equipos especificados en la fecha dada.

## Ejecutar el Proyecto Localmente
Para ejecutar el proyecto localmente, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone ""
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
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Contribuciones
¡Las contribuciones son bienvenidas! Por favor, haz un fork del repositorio y crea una pull request con tus cambios.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.
