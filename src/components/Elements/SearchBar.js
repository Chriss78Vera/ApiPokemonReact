import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const SearchBar = () => {
  const [id, setId] = React.useState();
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Enter the id or the name of the pokemon!"
          className="me-2"
          aria-label="Search"
          valure={id}
          style={{ color: "black", fontWeight: "bold" }}
          onChange={(pokemon) => setId(pokemon.target.value)}
        />

        <Link variant="primary" to={`/details/${id}`}>
          <Button variant="dark">SEARCH</Button>
        </Link>
      </Form>
    </div>
  );
};

export default SearchBar;
