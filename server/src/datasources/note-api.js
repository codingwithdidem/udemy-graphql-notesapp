const { RESTDataSource } = require("apollo-datasource-rest");

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
}

module.exports = NoteAPI;
