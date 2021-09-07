const { RESTDataSource } = require("apollo-datasource-rest");
const { UserInputError } = require("apollo-server-errors");

class NoteAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://udemy-graphql-notesapp-rest-ap.herokuapp.com/";
  }

  getNotes() {
    return this.get("notes");
  }

  getNote(noteId) {
    return this.get(`notes/${noteId}`);
  }

  getAuthors() {
    return this.get("authors");
  }

  getAuthor(authorId) {
    return this.get(`authors/${authorId}`);
  }

  incrementNoteViews = async (noteId) => {
    const note = await this.getNote(noteId);

    return this.patch(`notes/${noteId}`, {
      numberOfViews: note.numberOfViews + 1,
    });
  };
}

module.exports = NoteAPI;
