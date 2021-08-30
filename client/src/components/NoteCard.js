import React from "react";

const NoteCard = () => {
  return (
    <div class="card m-2 cursor-pointer border border-purple-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <div class="m-4">
        <h2 class="text-lg mb-2 text-purple-900">Title</h2>
        <p class="font-light font-mono text-sm text-indigo-600 hover:text-gray-900 transition-all duration-200">
          Space, the final frontier. These are the voyages of the Starship
          Enterprise. Its five-year mission: to explore strange new worlds.
        </p>
      </div>
    </div>
  );
};

export default NoteCard;
