import React from "react";
import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";
import NavigationBar from "../Elements/Navbar";
const Personal = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <body>
        <Container
          style={{
            height: "80vh",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Container style={{ paddingTop: "50px" }}>
            <Row>
              <Col sm={4}>
                <Container
                  style={{
                    paddingTop: "30px",
                  }}
                >
                  <Image
                    roundedCircle
                    style={{
                      width: "18rem",
                    }}
                    src={
                      "https://avatars.githubusercontent.com/u/85882973?s=400&u=d67a616f8f725311977c5b922345e36b87024e89&v=4"
                    }
                  ></Image>
                </Container>
              </Col>
              <Col sm={6}>
                <Container
                  style={{
                    paddingTop: "50px",
                  }}
                >
                  <ListGroup>
                    <ListGroup.Item
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        padding: "20px",
                      }}
                    >
                      Hi!
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        padding: "20px",
                      }}
                    >
                      My name is Christopher Vera
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        fontSize: "20px",
                        padding: "30px",
                        textAlign: "justify",
                      }}
                    >
                      I am a software development technologist, it is easy for
                      me to program web and mobile applications in React and
                      React Native respectively, I consider myself an attentive
                      person and easy to learn tools that facilitate the
                      development of these applications.
                    </ListGroup.Item>
                  </ListGroup>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "20px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Row>
                <Col sm={4}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Programming Lenguagues
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        HTML5 | CSS | JavaScript | JavaScript | Python
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={4}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Frameworks
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        PHP Laravel | React/React Native | Node.js
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={4}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Tools
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        Firebase Storage | Firestore | Github | Figma | Google
                        Cloud
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
      </body>

      <Container style={{ fontWeight: "bold", borderBlockStart: "solid" }}>
        <Container style={{ fontSize: "25px" }}>Contact me!</Container>
        <Table style={{ textAlign: "center" }}>
          <thead style={{ color: "black", fontSize: "50px" }}>
            <th>
              <CiMail />
            </th>
            <th>
              <CiPhone />
            </th>
            <th>
              <BsGithub />
            </th>
          </thead>
          <tbody>
            <td>mv34613@gmail.com</td>
            <td>+593 98 348 4551</td>
            <td>Chriss78Vera</td>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Personal;
