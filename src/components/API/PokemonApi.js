import axios from "axios";
import React from "react";

export const PokemonApi = (url) => {
  const [pokemon, setPokemon] = React.useState({ state: true, data: null });

  React.useEffect(() => {
    getDataPokemon(url);
  }, [url]);

  const getDataPokemon = (url) => {
    setPokemon({ state: true, data: null });

    const pokemon_api = axios.create({
      baseURL: url,
    });

    pokemon_api
      .get()
      .then((response) => {
        setPokemon({ state: false, data: response.data });
      })
      .catch(function (error) {
        if (error.response) {
          console.log(
            "Request was made and server responded with a non 200 status"
          );
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("Request was made, but no response was received");
          console.log(error.request);
        } else {
          console.log("Something happened setting up the request");
          console.log(error.message);
        }
      });
  };
  return pokemon;
};
export const GetPokemonDetails = (namePokemon) => {
  const [pokemonDetails, setPokemonDetails] = React.useState({
    state: true,
    data: null,
  });
  React.useEffect(() => {
    getDetails(namePokemon);
  }, [namePokemon]);

  const getDetails = (namePokemon) => {
    setPokemonDetails({ state: true, data: null });
    const pokemon_api = axios.create({
      baseURL: `https://pokeapi.co/api/v2/pokemon/${namePokemon}`,
    });

    pokemon_api
      .get()
      .then((response) => {
        setPokemonDetails({ state: false, data: response.data });
        
      })
      .catch(function (error) {
        if (error.response) {
          console.log(
            "Request was made and server responded with a non 200 status"
          );
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("Request was made, but no response was received");
          console.log(error.request);
        } else {
          console.log("Something happened setting up the request");
          console.log(error.message);
        }
      });
  };
  return pokemonDetails;
};
