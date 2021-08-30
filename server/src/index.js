const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    notes: () => [...new Array(6)],
  }),
  Note: () => ({
    id: () => "note_01",
    title: () => "Note 1",
    description: () => "Note 1 Desc",
    author: () => {
      return {
        name: "Didem",
        age: 26,
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80",
      };
    },
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(() => {
  console.log(
    ` Server is running on port 4000, Query at : https://studio.apollographql.com/dev`
  );
});
