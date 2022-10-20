const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  _id:{ type: String, required: true },
  name: { type: String, required: true },
  id: { type: String, required: true },
  // description: { type: String, required: true },
  // type: [
  //   {
  //     type: { name: String },
  //   },
  // ],
  sprites: {
    other: {
      home: {
        front_default: { type: String },
      },
    },
  },
  // evolution: { type: String },
  height: { type: String },
  weight: { type: String },
  // abilities: [
  //   {
  //     ability: [
  //       {
  //         name: { type: String },
  //       },
  //     ],
  //     ability: [
  //       {
  //         name: { type: String },
  //       },
  //     ],
  //   },
  // ],
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
