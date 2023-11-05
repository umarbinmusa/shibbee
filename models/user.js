const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const ConnectDB = require("./utils/connect");
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolver/index");
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

//const bodyParser = require("body-parser");
const Investors = require("../../models/investors");
const Producer = require("../../models/producer");

// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
      return "Shibee Studio!";
    },
    // creating producers account
    createProducer: args => {
      const producer = new Producer({
        first_name: args.producerInput.first_name,
        last_name: args.producerInput.last_name,
        middle_name: args.producerInput.middle_name,
        email: args.producerInput.email,
        phone_number: args.producerInput.phone_number,
        image: args.producerInput.image,
        indigine: args.producerInput.indigine,
        signature: args.producerInput.signature,
        nin: args.producerInput.nin,
        bvn: args.producerInput.bvn,
        password: args.producerInput.password,
        date_of_birth: args.producerInput.date_of_birth,
        next_of_kin_number: args.producerInput.next_of_kin_number,
        next_of_kin_name: args.producerInput.next_of_kin_name,
        next_of_kin_email: args.producerInput.next_of_kin_email,
        next_of_kin_nin: args.producerInput.next_of_kin_nin,
        next_of_kin_bvn: args.producerInput.next_of_kin_bvn,
        next_of_kin_image: args.producerInput.next_of_kin_image
      });
      return producer
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc };
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    },
    createInvestors: args => {
      const investors = new Investors({
        first_name: args.investorsInput.first_name,
        last_name: args.investorsInput.last_name,
        middle_name: args.investorsInput.middle_name,
        email: args.investorsInput.email,
        phone_number: args.investorsInput.phone_number,
        image: args.investorsInput.image,
        indigine: args.investorsInput.indigine,
        signature: args.investorsInput.signature,
        nin: args.investorsInput.nin,
        bvn: args.investorsInput.bvn,
        password: args.investorsInput.password,
        date_of_birth: args.investorsInput.date_of_birth,
        next_of_kin_number: args.investorsInput.next_of_kin_number,
        next_of_kin_name: args.investorsInput.next_of_kin_name,
        next_of_kin_email: args.investorsInput.next_of_kin_email,
        next_of_kin_nin: args.investorsInput.next_of_kin_nin,
        next_of_kin_bvn: args.investorsInput.next_of_kin_bvn,
        next_of_kin_image: args.investorsInput.next_of_kin_image
      });
    
      return investors.save().then(result => {
        console.log(result);
        return { ...result._doc };
      }).catch(err => {
        console.log(err);
        throw err;
      });
    },
    
  };
  
  
  const { buildSchema } = require("graphql");




// Construct a schema, using GraphQL schema language
module.exports = buildSchema(`
  
  type Producer {
    _id: ID!
    first_name: String!
    last_name: String!
    middle_name: String
    email: String!
    phone_number: String!
    image: String!
    indigine: String!
    signature: String!
    nin: String!
    bvn: String!
    password: String!
    date_of_birth: String!
    next_of_kin_number: String!
    next_of_kin_name: String!
    next_of_kin_email: String!
    next_of_kin_nin: String!
    next_of_kin_bvn: String!
    next_of_kin_image: String!
  }

  type Investors {
    _id: ID!
    first_name: String!
    last_name: String!
    middle_name: String
    email: String!
    phone_number: String!
    image: String!
    indigine: String!
    signature: String!
    nin: String!
    bvn: String!
    password: String!
    date_of_birth: String!
    next_of_kin_number: String!
    next_of_kin_name: String!
    next_of_kin_email: String!
    next_of_kin_nin: String!
    next_of_kin_bvn: String!
    next_of_kin_image: String!
  }


  input ProducerInput {
    first_name: String!
    last_name: String!
    middle_name: String
    email: String!
    phone_number: String!
    image: String!
    indigine: String!
    signature: String!
    nin: String!
    bvn: String!
    password: String!
    date_of_birth: String!
    next_of_kin_number: String!
    next_of_kin_name: String!
    next_of_kin_email: String!
    next_of_kin_nin: String!
    next_of_kin_bvn: String!
    next_of_kin_image: String!
  }

  input InvestorsInput {
    first_name: String!
    last_name: String!
    middle_name: String
    email: String!
    phone_number: String!
    image: String!
    indigine: String!
    signature: String!
    nin: String!
    bvn: String!
    password: String!
    date_of_birth: String!
    next_of_kin_number: String!
    next_of_kin_name: String!
    next_of_kin_email: String!
    next_of_kin_nin: String!
    next_of_kin_bvn: String!
    next_of_kin_image: String!
  }
  type RootQuery {
    producer: [Producer!]!
    investors: [Investors!]!
    
  }

  type RootMutation {
    createProducer(producerInput: ProducerInput): Producer
    createInvestors(investorsInput: InvestorsInput): Investors
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }


`);