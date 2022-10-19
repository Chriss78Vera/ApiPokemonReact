import React from "react";
import NavigationBar from "../Elements/Navbar";
import { Link, useParams } from "react-router-dom";
import { GetPokemonDetails } from "../API/PokemonApi";
import {
  Alert,
  Button,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import "../../styles/PokemonDetails.css";
const PokemonsDetails = () => {
  const { namePokemons } = useParams();
  const pokemonDetails = GetPokemonDetails(namePokemons);
  const { state, data } = pokemonDetails;
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <Container>
        {state ? (
          <Alert variant={"danger"}>
            Pokemon was not found!
            <Link variant="primary" to={"/"}>
              <Button variant="primary">Back</Button>
            </Link>
          </Alert>
        ) : (
          <Container>
            <Row className="pokemonRow">
              <Col sm={"auto"} xs={"auto"} md={"auto"}>
                <Container>
                  <Image
                    className="pokemonimage"
                    src={data.sprites.other.home.front_default}
                  ></Image>
                </Container>
              </Col>
              <Col sm={"auto"} xs={"auto"} md={"auto"}>
                <Container className="pokemonContainerText">
                  <Container>
                    <h2>{data.name}</h2>
                    <div>
                      <h5>Type: {data.types[0].type.name}</h5>
                    </div>
                  </Container>
                  <Container className="pokemonContainerFormat">
                    <Container className="pokemonContainerFormatTable">
                      <h4>Atributes: </h4>
                    </Container>
                    <ListGroup horizontal>
                      <ListGroup.Item
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        <h5>Weight: {data.weight} </h5>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h5>Height: {data.height} </h5>
                      </ListGroup.Item>
                    </ListGroup>
                  </Container>
                  <Container className="pokemonCenter">
                    <Container className="pokemonContainerFormatTable">
                      <h4>Abilities: </h4>
                    </Container>
                    <ListGroup>
                      {data.abilities.map((p) => (
                        <ListGroup.Item>
                          <h5>{p.ability.name}</h5>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Container>
                </Container>
              </Col>
            </Row>
            <Container className="pokemonContainerTable">
              <h2>Pokemon Stats</h2>
              <Table
                striped
                bordered
                hover
                responsive="sm"
                className="pokemonTextTransform"
              >
                <thead>
                  <tr>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Sp.Attack</th>
                    <th>Sp.Defense</th>
                    <th>Speed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {data.stats.map((p) => (
                      <td>{p.base_stat}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </Container>
            <Container className="pokemonCenter">
              <Link variant="primary" to={-1}>
                <Button variant="primary">Back</Button>
              </Link>
            </Container>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default PokemonsDetails;
