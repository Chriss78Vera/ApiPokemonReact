import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";
import { PokemonApi } from "../API/PokemonApi";
import "../../styles/PokemonCard.css";
function PokemonCards({ url }) {
  const stateAxios = PokemonApi(url);
  const { state, data } = stateAxios;
  return (
    <>
      {state ? (
        <></>
      ) : (
        <>
          <Card className="pokemon">
            <Card.Body>
              <Card.Title
                style={{
                  borderColor: "black",
                  borderBlockEndStyle: "solid",
                  borderBlockWidth: "3px",
                }}
              >
                {data.id}
              </Card.Title>
              <Card.Img
                variant="top"
                src={data.sprites.other.home.front_default}
              />
              <Card.Title style={{textTransform:'capitalize' }}>
                {data.name}
              </Card.Title>
              <Card.Text></Card.Text>
              <Link variant="primary" to={`/details/${data.name}`}>
                <Button variant="dark">DETAILS</Button>
              </Link>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}

export default PokemonCards;
