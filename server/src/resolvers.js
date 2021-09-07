const resolvers = {
  Query: {
    // Returns an array of Notes
    notes: (_, __, { dataSources }) => {
      return dataSources.noteAPI.getNotes();
    },
  },
  Note: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.noteAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
