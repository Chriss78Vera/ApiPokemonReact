import axios from "axios";
import React from "react";
/**
 * It's a React hook that uses axios to make a GET request to a url and returns the response data
 * @param url - The url of the api
 * @returns An object with two properties, state and data.
 */

export const PokemonMongooseApi = (url) => {
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
        console.log(response.data);
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
 * It takes in an array of objects, and then posts the data to the server.
 * @param data - [{
 */
export const PokemonPostApi = (data) => {
  let datos=[]
  data[0].types.type.map((p)=>( datos.push({type:{name:p.name}})))
  axios
    .post("/api/pokemon", {
      _id: data[0].id,
      name: data[0].name,
      id: data[0].id,
      sprites: {
        other: {
          home: {
            front_default: data[0].front_default,
          },
        },
      },
      types:datos,
      height: data[0].height,
      weight: data[0].weight,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      return error;
    });
};
