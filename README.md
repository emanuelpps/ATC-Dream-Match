# ATC Dream Match

## Deploy
https://atc-dream-match-three.vercel.app/

## Descripción General

ATC Dream Match es una aplicación web diseñada para gestionar y organizar partidos de equipos. Este proyecto está construido utilizando Next.js, TypeScript y Tailwind CSS.

## Tecnologías Utilizadas

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E3?style=flat&logo=axios&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **`public/`**: Contiene activos estáticos como imágenes y otros archivos accesibles públicamente.
- **`src/`**: El directorio principal del código fuente.

  - **`app/`**

    - **`Intro/`**: Pantalla de bienvenida.

    - **`home/`**: Home de la aplicación.

      - **`components/playerSelect/`**: Maneja la visualización y gestión de jugadores seleccionados.

      - **`components/playerTeamBox/`**: Caja para mostrar los Jugadores de un equipo específico.

      - **`components/sidebar/`**: Barra lateral para la selección de jugadores.

  - **`components/`**: Componentes reutilizables.

    - **`Buttons/`**: Componente de botónes reutilizable con variantes de estilo.

    - **`MobileWidget/`**: Widget optimizado para dispositivos móviles.

  - **`services/`**: Conexion a la API.

## Componentes y Funciones Clave

### Componentes

- **Intro**: Pantalla de bienvenida.
- **PlayerSelect**: Maneja la visualización y gestión de jugadores seleccionados.
- **TeamsWrapper**: Gestiona la creación, eliminación y modificación de equipos.
- **SideBar**: Barra lateral para la selección de jugadores.
- **PlayerTeamBox**: Caja para mostrar los jugadores de un equipo específico.
- **MobileWidget**: Widget optimizado para dispositivos móviles.
- **Buttons**: Componente de botónes reutilizable con variantes de estilo.

### Funciones

- **`fetchPlayers()`**: Carga la lista de jugadores cada vez que se renderiza la home.
- **`addPlayerHandler()`**: Añade un jugador a la lista de jugadores seleccionados y lo marca como seleccionado.
- **`handleImageError()`**: Maneja el error de imagen en caso de que una imagen no se pueda cargar.
- **`setTeams()`**: Establece la lista de jugadores en el equipo.
- **`setTeamTitle()`**: Establece el nombre del equipo.
- **`addPlayerHandler()`**: Agrega un jugador a un equipo.
- **`setIsTeamReady()`**: Establece si el equipo está listo.
- **`setRemovePlayersFromTeam()`**: Elimina un jugador de un equipo y lo restablece a la lista de jugadores.
- **`handleDeleteTeam()`**: Elimina un equipo y restablece valores por default.
- **`setIsSideBarShow()`**: Despliega o oculta la barra lateral en version mobile.

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
   ```

3. **Ejecuta el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

4. **Abre la aplicación**:
   Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.


## Capturas de Pantalla

### Intro
![Intro](https://res.cloudinary.com/dkgoszhfr/image/upload/v1722865077/lqvxb8qznrx9wg8c4gh9.png)

### Home
![Home](https://res.cloudinary.com/dkgoszhfr/image/upload/v1722865079/xjppjuoij5wfzsd4gp6o.png)

### Selección de Jugador
![Selección de Jugador](https://res.cloudinary.com/dkgoszhfr/image/upload/v1722865078/psil6b16c2n9m6rk58ci.png)

### Agregando Jugadores a los Equipos
![Agregando Jugadores a los Equipos](https://res.cloudinary.com/dkgoszhfr/image/upload/v1722865080/fapuyuo3otsxtslw5a6n.png)

### Nombrar Equipo
![Nombrar Equipo](https://res.cloudinary.com/dkgoszhfr/image/upload/v1722865079/ztxio4oryv3fypf6sqoc.png)

### Equipos Listos
![Equipos Listos](https://res.cloudinary.com/dkgoszhfr/image/upload/v1722865080/n7vxbfmcqhnqecvd9uru.png)


