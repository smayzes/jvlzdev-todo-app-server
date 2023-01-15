const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
require("dotenv").config();

const dbConnection = require("./database/db.js");
const routes = require("./routes/route.js");

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes);

const PORT = process.env.PORT || 5000;

dbConnection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));