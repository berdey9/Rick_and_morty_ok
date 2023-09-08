const fs = require("fs");
const getCharById = require("./controllers/getCharById");
const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("../src/routes/index");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/rickandmorty", router); //La primer parte la rutea aca y la otra en el archivo index
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//APP se encarga de levantar el servidor
module.exports = app;
