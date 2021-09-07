const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const NoteAPI = require("./datasources/note-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      noteAPI: new NoteAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(
    ` Server is running on port 4000, Query at : https://studio.apollographql.com/dev`
  );
});
