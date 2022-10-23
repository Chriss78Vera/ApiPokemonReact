# ApiPokemonReact - FrontEnd

## Construcción del FrontEnd de Pokemon

### Pasos para la creación del FrontEnd

1. **Creación del proyecto**: 
```bash
npx create-react-app FrontEnd
cd FrontEnd
npm start
```
2. **Instalación de dependencias**: 
  -  Se instala bootstrap para la estilizacion del FrontEnd y realizar una pagina web responsiva.
  -  Se instala axios para poder leer las Apis que se utilizan en el proyecto.
  -  Se instala React-router-dom para poder navegar entre las ventanas. 
3. **Creacion de los componentes:**: Se crean los componentes como cards, list, etc.
4. **Creacion de las paginas:** Se crean diferentes pantallas para la navegacion de la aplicacion.
5. **Creacion de modulos**: Se crean modulos para llamar a las siguientes APIs.
  - **pokeapi.co**: Nos va a traer todos los pokemones de la una api de internet.
  - **pokemonapi**: Nos va a proporcionar una conexion con mongodb.
   
6. **Proceso de consumo de la API**: 
                              
![Flujo de Api Rest](https://github.com/Chriss78Vera/ApiPokemonReact/blob/3f9a575bc8df15ce9f9ff3ac702a89caeea5965d/public/ApiRest.png "Flujo de la ApiRest")

7. **Consumir la Api con Axios: ** En los modulos creados leemos la las APIs con las URL proporcionadas.
  - **pokeapi.co:** 
    - Se utilizo una URL ```https://pokeapi.co/api/v2/pokemon?limit=9&offset=0``` para mostrar los 10 primeros pokemones. 
    - Se utilizo la URL  ```https://pokeapi.co/api/v2/pokemon/<namepokemon>``` para traer los datos de cada pokemon. 
  - **pokemonapi: ** 
    - **Get**: Traer los pokemones almacenados en la base de mongoDB con la ruta: ```/api/pokemon```
    - **POST**: Inserta pokemones a la base de mongoDB con el schema establecido: ```/api/pokemon```


## Instalación del proyecto
### Pasos para la instalación 
1. **Clonación del proyecto**: Se clona el repositorio.
2. **Instalación de dependencias:** 
  ```bash
  cd ApiPokemon
  git checkout master
  npm install 
  ```
3. **Inciamos el proyecto:** 
  ```bash
  npm start
  ```
