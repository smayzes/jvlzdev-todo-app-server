const mongoose = require("mongoose");

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;

const databaseConnection = () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@juls-cluster.bgs81.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected Successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database ", error.message);
  });
};

module.exports = databaseConnection;
