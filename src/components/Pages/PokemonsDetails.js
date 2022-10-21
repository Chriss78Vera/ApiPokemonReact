import React from "react";
import NavigationBar from "../Elements/Navbar";
import { Link, useParams } from "react-router-dom";
import { GetPokemonDetails } from "../API/PokemonApi";
import { BsStarFill } from "react-icons/bs";
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
import { PokemonPostApi} from "../API/mongoApi";
const PokemonsDetails = () => {
  const { namePokemons } = useParams();
  const pokemonDetails = GetPokemonDetails(namePokemons);
  const { state, data } = pokemonDetails;
  const [postStatus, setPostStatus] = React.useState();
  const postDataPokemon = async () => {
    let arrayTypes = [
      data.types.map((p) => ({
        name: p.type.name,
      })),
    ];
    let dataPokemon = [
      {
        name: data.name,
        _id: data.id,
        id: data.id,
        front_default: data.sprites.other.home.front_default,
        height: data.height,
        weight: data.weight,
        types: {
          type: arrayTypes[0],
        },
      },
    ];
    await PokemonPostApi(dataPokemon);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <Container>
        {state ? (
          <Container>
            <Alert variant={"danger"}>Pokemon was not found!</Alert>
          </Container>
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
                    <Row>
                      <Col>
                        <h2>{data.name}</h2>
                      </Col>
                      <Col  style={{ marginBottom:"1rem"}}>
                        <Button
                          variant="dark"
                          onClick={() => {
                            if (!postDataPokemon()) {
                              setPostStatus(true);
                              console.log(postStatus);
                            } else {
                              setPostStatus(false);
                              console.log(postStatus);
                            }
                          }}
                          style={{ width: "20rem" }}
                        >
                          Add to favorite!
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h5>Type:</h5>
                      </Col>
                      {data.types.map((p) => (
                        <Col>
                          <h5>{p.type.name}</h5>
                        </Col>
                      ))}
                    </Row>
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
            <Container className="pokemonCenter"  style={{ marginBottom: "1rem" }}>
              <Link variant="primary" to={"/"}>
                <Button variant="dark" style={{ width: "20rem" }}>
                  Back
                </Button>
              </Link>
            </Container>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default PokemonsDetails;
