const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const ConnectDB = require("./utils/connect");
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");
const bodyParser = require("body-parser");


const PORT = process.env.PORT || 5000;

require("dotenv").config();
const app = express();
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

const start = async () => {
  try {
    await ConnectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Connected to DB and Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

start();
