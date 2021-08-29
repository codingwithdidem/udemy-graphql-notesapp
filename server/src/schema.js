const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Notes for homepage"
    notes: [Note!]!
  }

  "Author Description"
  type Author {
    id: ID!
    "The name of the author"
    name: String!
    "The age of the author"
    age: Int!
    "The photo url of the author"
    photo: String
  }

  "Note Description"
  type Note {
    id: ID!
    "The title of the note"
    title: String!
    "The description of the note"
    description: String!
    "The author of the note"
    author: Author!
  }
`;

module.exports = typeDefs;
