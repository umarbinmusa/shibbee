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