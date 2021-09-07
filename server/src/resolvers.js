const resolvers = {
  Query: {
    // Returns an array of Notes
    notes: (_, __, { dataSources }) => {
      return dataSources.noteAPI.getNotes();
    },
    // Fetches single note
    note: (parent, { id }, { dataSources }, info) => {
      return dataSources.noteAPI.getNote(id);
    },
  },
  Note: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.noteAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
