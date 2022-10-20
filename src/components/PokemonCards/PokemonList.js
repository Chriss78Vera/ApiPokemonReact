import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../Elements/SearchBar";
import PokemonCards from "./PokemonCard";
const PokemonList = ({ results }) => {
  return (
    <Container style={{ justifyContent: "center", alignItems: "center" }}>
      <Container style={{ justifyContent: "center", alignItems: "center" }}>
        <h1>Pokemon Challenge</h1>
        <Container style={{ marginBottom: "50px", marginTop: "20px"}}>
          <SearchBar />
        </Container>
      </Container>
      <Row>
        {results.map((p) => (
          <Col xs={12} md={4} sm={6} key={p.name}>
            <PokemonCards url={p.url} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonList;
