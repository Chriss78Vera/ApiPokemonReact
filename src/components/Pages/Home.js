import React, { Component } from "react";
import NavigationBar from "../Elements/Navbar";
import { PokemonApi } from "../API/PokemonApi";
import PokemonList from "../PokemonCards/PokemonList";
import { Button, Container } from "react-bootstrap";
const Home = () => {
  const [url, setUrl] = React.useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
  const stateAxios = PokemonApi(url);
  const { state, data } = stateAxios;
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>

      <body className="App-body">
        {state ? (
          <h1>Cargando....</h1>
        ) : (
          <Container>
            <PokemonList results={data.results} />
            <Container className="m-auto">
              <div className="mb-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setUrl(data.previous)}
                >
                  Large button
                </Button>
                <Button
                  onClick={() => setUrl(data.next)}
                  variant="secondary"
                  size="lg"
                >
                  Large button
                </Button>
              </div>
            </Container>
          </Container>
        )}
      </body>
    </div>
  );
};

export default Home;
