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

  Mutation: {
    incrementNoteViews: async (_, { id }, { dataSources }) => {
      try {
        const note = await dataSources.noteAPI.incrementNoteViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully updated note with id ${id} `,
          note,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.statusText,
          note: null,
        };
      }
    },
  },

  Note: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.noteAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
