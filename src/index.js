const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const pokemonRoutes = require("./routes/pokemon");
const path = require("path");
// swagger is
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PokemonAPI MongoDB",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:9000",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};
// Middleware
const app = express();
const port = process.env.PORT || 9000;
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

app.use(express.json());
app.use("/api", pokemonRoutes);

//MongoDb Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));
