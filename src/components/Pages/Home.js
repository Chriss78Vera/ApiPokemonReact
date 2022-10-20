import React, { Component } from "react";
import NavigationBar from "../Elements/Navbar";
import { PokemonApi } from "../API/PokemonApi";
import PokemonList from "../PokemonCards/PokemonList";
import { Button, Col, Container, Row } from "react-bootstrap";
const Home = () => {
  const [url, setUrl] = React.useState(
    "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
  );
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
          <Container style={{ marginTop: "20px" }}>
            <PokemonList results={data.results} />
            <Container className="m-auto" style={{ paddingBottom: "20px" }}>
              <Row>
                <Col>
                  <Button
                    variant="dark"
                    size="lg"
                    onClick={() => setUrl(data.previous)}
                  >
                    PREVIOUS
                  </Button>
                </Col>
                <Col>
                  <Button
                    onClick={() => setUrl(data.next)}
                    variant="dark"
                    size="lg"
                  >
                    NEXT
                  </Button>
                </Col>
              </Row>
            </Container>
          </Container>
        )}
      </body>
    </div>
  );
};

export default Home;
