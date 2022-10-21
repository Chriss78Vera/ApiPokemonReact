import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";
import { PokemonApi } from "../API/PokemonApi";
import "../../styles/PokemonCard.css";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
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
            <Card.Header>
              <Card.Title className="pokemon-title">
                <Card.Img
                  variant="top"
                  src={data.sprites.other.home.front_default}
                />
              </Card.Title>
            </Card.Header>
            <Card.Body style={{ fontWeight: "bold", fontSize: "18px" }}>
              <ListGroup>
                <ListGroup.Item>
                  <Container>
                    <Row>
                      <Col xs={12} md={12} sm={12}>{data.name}</Col>
                      <Col>
                        <Link variant="primary" to={`/details/${data.name}`}>
                          <Button style={{ fontWeight: "bold" }} variant="dark">
                            Details
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}

export default PokemonCards;
