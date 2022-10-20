const express = require("express");
const pokemonSchema = require("../models/pokemon");

const router = express.Router();

/* Creating a new pokemon in the database. */
router.post("/pokemon", (req, res) => {
  const pokemon = pokemonSchema(req.body);
  console.log(pokemon)
  pokemon
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
    console.log("GUARDADO")
});

/* This is a route that is used to get all the pokemon in the database. */
router.get("/pokemon", (req, res) => {
  pokemonSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
    console.log("Lectura de la base")
});

/* The above code is a route that is used to get a specific pokemon by its id. */
router.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  pokemonSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
});
module.exports = router;