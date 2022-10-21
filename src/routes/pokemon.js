const express = require("express");
const pokemonSchema = require("../models/pokemon");

const router = express.Router();

/* Creating a new pokemon in the database. */
router.post("/pokemon", (req, res) => {
  const pokemon = pokemonSchema(req.body);
      pokemon
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err.message }));
        console.log("Pokemon saved")
});

/* This is a route that is used to get all the pokemon in the database. */
router.get("/pokemon", (req, res) => {
  pokemonSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
  console.log("Lectura de la base");
});


module.exports = router;
