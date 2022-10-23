# ApiPokemonReact - BackEnd 

# Construccion del BackEnd de Pokemon

## Pasos para la creacion

1. **Creación del proyecto**: Se crea un proyecto para poderr utilizar JavaScript para el desarollo de la API
2. **Instalación de dependencias**: 
  -  Se instala mongoose para la conexion con la base de datos.
  -  Se instala express y neodeom para correr nuestro proyecto en el puerto elegido
  -  Se instala swagger para la documentacion de la API
3. **Creacion del Schema**: Se crean el schema para que los pokemones puedan ser ingresados en la base de mongoDB.
4. **Creacion de EndPoints**: Se crean las endpoints necesarias para que el front pueda utilizar la base de datos.
  - **Get**: Traer los pokemones almacenados en la base de mongoDB y responde en Formato JSON
  - **POST**: Inserta pokemones a la base de mongoDB con el schema establecido.
                              
![Flujo de Api Rest](https://github.com/Chriss78Vera/ApiPokemonReact/blob/3f9a575bc8df15ce9f9ff3ac702a89caeea5965d/public/ApiRest.png "Flujo de la ApiRest")
5. **Herramienta Swagger**: Se crea la configuracion para que el proyecto pueda utilizar swagger para documentar la API.
  - Se establece una ruta para que se pueda encontrar la documentacion: ```localhost:9000/api-doc```
  - Se realiza un schema para mostrar los parametros que utiliza la API.
  - Se realiza la documentacion de cada endpoint que tiene la API.

## Instalacion del proyecto

1. **Clonacion del proyecto**: Se clona el repositorio.
2. **Instalacion de dependencias:** 
  ```bash
  cd ApiPokemon
  git checkout BackEnd
  npm install 
  ```
3. **Inciamos el proyecto:** 
    ```bash
    npm start
    ```
