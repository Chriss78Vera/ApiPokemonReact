import React from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { PokemonMongooseApi } from "../API/mongoApi";
import NavigationBar from "../Elements/Navbar";
import "../../styles/PokemonCard.css";
const FavoritesList = () => {
  const [url, setUrl] = React.useState("/api/pokemon");
  const stateAxios = PokemonMongooseApi(url);
  const { state, data } = stateAxios;
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <Container>
        {state ? (
          <>
            <Container style={{ marginTop: "4rem" }}>
              <Alert variant={"danger"}>Internal Server Error: 500</Alert>
            </Container>
          </>
        ) : (
          <Container className="pokemon-Container">
            <Row>
              {data.map((p) => (
                <Col>
                  <Card className="pokemon-Card">
                    <Card.Header style={{ fontSize: "22px" }}>
                      <Row>
                        <Col xs={12} md={8}>
                          {p.name}
                        </Col>
                        <Col xs={6} md={4}>
                          <Link variant="primary" to={`/details/${p.name}`}>
                            <Button variant="dark">DETAILS</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Img src={p.sprites.other.home.front_default} />
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
                                {p.types.map((tp) => (
                                  <td>
                                    <p>{tp.type.name}</p>
                                  </td>
                                ))}
                              </tr>
                            </tbody>
                          </Table>
                          <Table striped bordered hover responsive="sm">
                            <thead>
                              <tr>
                                <th>Weight</th>
                                <th>Height</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{p.weight}</td>
                                <td>{p.height}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
         <Container className="pokemonCenter"  style={{ marginBottom: "1rem", marginTop: "1rem"}}>
              <Link variant="primary" to={"/"}>
                <Button variant="dark" style={{ width: "20rem" }}>
                  Back
                </Button>
              </Link>
            </Container>
      </Container>
    </div>
  );
};

export default FavoritesList;
