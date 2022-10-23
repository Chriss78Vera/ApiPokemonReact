import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";
import { PokemonApi } from "../API/PokemonApi";
import "../../styles/PokemonCard.css";
import { Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import "../../styles/PokemonCard.css";
function PokemonCards({ url }) {
  /* Destructuring the state and data from the Api. */
  const stateAxios = PokemonApi(url);
  const { state, data } = stateAxios;
  return (
    <>
      {state ? (
        <></>
      ) : (
        <>
          <Card className="pokemon-Card">
            <Card.Header style={{ fontSize: "22px" }}>
              <Row>
                <Col xs={12} md={8}>
                  {data.name}
                </Col>
                <Col xs={6} md={4}>
                  <Link variant="primary" to={`/details/${data.name}`}>
                    <Button variant="dark">DETAILS</Button>
                  </Link>
                </Col>
              </Row>
            </Card.Header>
            <Card.Img src={data.sprites.other.home.front_default} />
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <Container
                    style={{
                      marginBottom: "1rem",
                    }}
                  >
                    Pokemon Type
                  </Container>
                  <Table striped bordered hover responsive="sm">
                    <tbody>
                      <tr>
                        {data.types.map((tp) => (
                          <td>
                            <p>{tp.type.name}</p>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
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
