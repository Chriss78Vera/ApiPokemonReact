const mongoose = require("mongoose");

/* Creating a schema for the pokemon model. */
const pokemonSchema = mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  id: { type: String, required: true },
  types: {},
  sprites: {
    other: {
      home: {
        front_default: { type: String },
      },
    },
  },
  height: { type: String },
  weight: { type: String },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
