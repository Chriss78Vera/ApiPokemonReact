import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";
import { PokemonApi } from "../API/PokemonApi";

function PokemonCards({ url }) {
  const stateAxios = PokemonApi(url);
  const { state, data } = stateAxios;
  return (
    <>
      {state ? (
        <></>
      ) : (
        <>
          <Card style={{ marginBottom: "20px" }}>
            <Card.Img
              variant="top"
              src={data.sprites.other.home.front_default}
            />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">efe</Button>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}

export default PokemonCards;
