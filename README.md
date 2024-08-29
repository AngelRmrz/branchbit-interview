# Entrevista Branchbit

## Descripción General

Este proyecto implementa una sencilla aplicación web que simula un proceso de autenticación y muestra datos de un usuario a partir de un ID. Se utilizaron las siguientes tecnologías:

- **React:** Para construir la interfaz de usuario.
- **Tailwind CSS:** Para estilizar los componentes.
- **Mirage JS:** Para simular la interacción con una API.
- **Axios:** Para realizar las solicitudes a la API simulada.
- **React Router DOM:** Para manejar las rutas de la aplicación.

## Estructura del Proyecto

- **src:**
  - **assets:** Contiene los recursos estáticos como imágenes, iconos, etc.
  - **components:** Componentes reutilizables:
    - **ErrorMessage:** Muestra mensajes de error de manera consistente en toda la aplicación.
    - **Layout:** Define la estructura general de las páginas (encabezado, pie de página, etc.).
    - **Spinner:** Indica al usuario que se está cargando información.
  - **hooks:** Lógica reutilizable:
    - **useGetUserByID:** Realiza la petición para obtener los datos de un usuario por su ID.
    - **useLogin:** Maneja la lógica de autenticación.
  - **mirage:** Simulación de la API:
    - **apiService:** Configura el servidor Mirage JS y define los endpoints y respuestas.
  - **pages:** Componentes de las páginas:
    - **FormUser:** Muestra el formulario para editar los datos del usuario.
    - **Login:** Formulario de inicio de sesión.
    - **Unauthorized:** Página de acceso no autorizado.
  - **types:** Interfaces y tipos de datos:
    - **users:** Define la estructura de un objeto de usuario.

## Funcionalidades

- **Autenticación:**
  - Permite a los usuarios iniciar sesión con las credenciales por defecto.
  - Maneja el número máximo de intentos de inicio de sesión.
  - Redirige a la página correspondiente según el estado de autenticación.
- **Obtención de datos de usuario:**
  - Realiza una solicitud a la API simulada para obtener los datos de un usuario por su ID.
  - Muestra los datos del usuario en el formulario correspondiente.
- **Manejo de errores:**
  - Muestra mensajes de error claros y concisos en caso de fallos en las peticiones.
- **Componentes reutilizables:**
  - Utiliza componentes como `ErrorMessage`, `Layout` y `Spinner` para mejorar la consistencia y mantenibilidad del código.
- **Tipos:**
  - Define tipos para los usuarios, lo que ayuda a evitar errores de tipo y mejora la legibilidad del código.

## Configuración

- **Variables de entorno:**
  - `VITE_DEFAULT_USERNAME`: Nombre de usuario por defecto.
  - `VITE_DEFAULT_PASSWORD`: Contraseña por defecto.

## Instrucciones de Ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/AngelRmrz/branchbit-interview.git
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar el proyecto:**

   ```bash
   npm run dev
   ```
