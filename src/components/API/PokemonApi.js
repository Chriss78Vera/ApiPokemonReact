import axios from "axios";
import React from "react";

/**
 * It takes a url as an argument and returns an object with a state and data property. The state
 * property is a boolean that is true when the data is being fetched and false when the data has been
 * fetched. The data property is the data that was fetched
 * @param url - The URL of the API endpoint you want to fetch data from.
 * @returns An object with two properties: state and data.
 */
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
/**
 * It's a React hook that returns an object with a state and data property.
 *
 * The state property is a boolean that is true when the data is being fetched and false when the data
 * is ready.
 *
 * The data property is the data that is returned from the API.
 * @param namePokemon - The name of the pokemon you want to get the details of.
 * @returns An object with two properties: state and data.
 */
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
