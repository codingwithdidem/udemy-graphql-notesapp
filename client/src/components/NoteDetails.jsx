import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading";

export const GET_NOTE = gql`
  query getNote($noteId: ID!) {
    note(id: $noteId) {
      id
      title
      description
      author {
        id
        name
        age
        photo
      }
      numberOfViews
    }
  }
`;

const NoteDetails = () => {
  const { noteId } = useParams();
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { noteId },
  });

  if (loading) return <Loading />;

  if (error) return `Error: ${error.message}`;

  const note = data.note;

  return (
    <div className="mt-3 container mx-auto max-w-2xl">
      <h1 className="py-2 text-gray-900 no-underline hover:no-underline font-extrabold text-xl">
        Note Details
      </h1>
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>

        <span className="text-sm text-gray-500"> {note?.numberOfViews} </span>
      </div>

      <blockquote className="flex flex-col border-l-4 border-purple-500 italic my-8 pl-8 md:pl-12">
        <span>{note?.title}</span>
        <span className="text-sm text-gray-500">{note?.description}</span>
      </blockquote>

      <div className="p-2 bg-pink-200">
        <h1>Author of The Note</h1>
        <div className="mt-2 flex space-x-4 items-center">
          <img
            className="inline object-cover w-16 h-16 mr-2 rounded-full"
            src={note?.author?.photo}
            alt="Profile photo"
          />
          <div className="flex space-x-2 items-center">
            <span>{note?.author?.name}</span>
            <span className="text-sm text-gray-500">{note?.author?.age}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;
