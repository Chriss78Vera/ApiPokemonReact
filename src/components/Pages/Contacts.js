import React, { Component } from "react";
import { Alert, Col, Container } from "react-bootstrap";
import { PokemonMongooseApi } from "../API/mongoApi";
import NavigationBar from "../Elements/Navbar";
const Contacts = () => {
  const [url, setUrl] = React.useState(
    "/api/pokemon"
  );
  const stateAxios = PokemonMongooseApi(url);
  const { state, data } = stateAxios;
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <Container>
      {state ? (
        <><Container style={{ marginTop: "4rem" }}>
        <Alert variant={"danger"}>Internal Server Error: 500</Alert>
      </Container></>
      ) : (
        <>
          {data.map((p) => (
          <Col xs={12} md={4} sm={6} key={p.name}>
            <h5>{p.name}</h5>
          </Col>
        ))}
        </>
      )}
      </Container>
    </div>
  );
};

export default Contacts;
