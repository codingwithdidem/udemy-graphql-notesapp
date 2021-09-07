import React from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

export const INCREMENT_NOTE_VIEWS = gql`
  mutation IncrementNoteViewsMutation($incrementNoteViewsId: ID!) {
    incrementNoteViews(id: $incrementNoteViewsId) {
      code
      success
      message
      note {
        id
        numberOfViews
        title
        description
        author {
          id
          name
          age
          photo
        }
      }
    }
  }
`;

const NoteCard = ({ note }) => {
  const { id, title, description, author } = note;

  const [incrementNoteViews] = useMutation(INCREMENT_NOTE_VIEWS, {
    variables: {
      incrementNoteViewsId: id,
    },
  });

  return (
    <Link to={`/notes/${id}`} onClick={incrementNoteViews}>
      <div className="card m-2 cursor-pointer border border-purple-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div className="m-4">
          <h2 className="text-lg mb-2 text-purple-900">{title}</h2>
          <p className="font-light font-mono text-sm text-indigo-600 hover:text-gray-900 transition-all duration-200">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
