const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Notes for homepage"
    notes: [Note!]!
    "Single Note for Details Page"
    note(id: ID!): Note
  }

  type Mutation {
    incrementNoteViews(id: ID!): IncrementNoteViewsResponse
  }

  type IncrementNoteViewsResponse {
    "Represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated note after a successful mutation"
    note: Note
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
    "Number of views the note has"
    numberOfViews: Int!
  }
`;

module.exports = typeDefs;
