const express = require("express");
const pokemonSchema = require("../models/pokemon");

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Pokemon:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Pokemon name
 *        id:
 *          type: string
 *          description: Pokemon number
 *        _id:
 *          type: string
 *          description: Pokemon identifier
 *        height:
 *          type: string
 *          description: Pokemon height
 *        weight:
 *          type: string
 *          description: Pokemon weight
 *        sprites:
 *          type: array
 *          description: Pokemon Image
 *          items:
 *           other:
 *             home:
 *               front_default:
 *        types:
 *          type: array
 *          description: Pokemon type
 *          items:
 *             type: object
 *             propierties:
 *              type:
 *                name: 
 *                  type: string
 *                  description: Pokemon type
 *      required:
 *        - name
 *        - id
 *        - _id
 *      example:
 *        name: Pikachu
 *        id: 25
 *        _id: 25
 *        height: 4
 *        weight: 60
 *        sprites:
 *          other:
 *            home:
 *              front_default: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png
 *        types:
 *          - type:
 *              name: electric
 */       

/**
 * @swagger
 * /api/pokemon:
 *  post:
 *    summary: Create a new pokemon
 *    tags: [Pokemon]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Pokemon'
 *    responses:
 *      200:
 *        description: New pokemon was been created!
 */
router.post("/pokemon", (req, res) => {
  const pokemon = pokemonSchema(req.body);
  pokemon
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
  console.log("Pokemon saved");
});
/**
 * @swagger
 * /api/pokemon:
 *  get:
 *    summary: return all pokemons saved in data base
 *    tags: [Pokemon]
 *    responses:
 *      200:
 *        description: Get all the pokemon in the database.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Pokemon'
 */
router.get("/pokemon", (req, res) => {
  pokemonSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
  console.log("Get Pokemons ");
});

module.exports = router;
