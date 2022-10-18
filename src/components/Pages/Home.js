import React, { Component } from "react";
import NavigationBar from "../Elements/Navbar";
import PokemonCards from "../PokemonCards/PokemonCard";
import { PokemonApi } from "../API/PokemonApi";
import PokemonList from "../PokemonCards/PokemonList";
const Home = () => {
  const [url, setUrl] = React.useState("https://pokeapi.co/api/v2/pokemon/");
  const stateAxios = PokemonApi(url);
  const { state, data } = stateAxios;

  state ? console.log(data) : console.log(data.results);
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
   
        <body className="App-body">
          {state ? (
            <h1>Cargando....</h1>
          ) : (
            <PokemonList results={data.results} />
          )}
        </body>
    
    </div>
  );
};

export default Home;
