const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const { Student } = require("./models/Student");
// const { Admin } = require("./models/Admin");
// const { Section } = require("./models/Section");

//GraphlQL Express Tools
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

require("dotenv").config({ path: "variables.env" });

//Initialize App
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(4444, () => {
  console.log(`Server listening on http://localhost:4444/graphql`);
});

// server.listen(4444, () => {
//   console.log(`Server listening on http://localhost:4444/graphql`);
// });
