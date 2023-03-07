require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors());

const puerto = process.env.PORT || 5500;

app.listen(puerto, () => {
  console.log("Escuchando en el puerto " + puerto);
});

dbConnect();
