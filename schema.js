const GraphQLSchema = require("graphql").GraphQLSchema;
const makeExecutableSchema = require("graphql-tools").makeExecutableSchema;

const resolvers = require("./resolver").resolver; // our resolver from resolver.js

// define our user type
// then define a users query, which must return an array type that optionally contains 0 or more User types
const typeDefs = `
  type User {
    id: String!
    name: String
    email: String
  }

  type Query {
    users: [User]!
  }
`;

exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
