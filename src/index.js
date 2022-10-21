const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const pokemonRoutes =require('./routes/pokemon')

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use('/api',pokemonRoutes);

//MongoDb Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));
