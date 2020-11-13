const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
