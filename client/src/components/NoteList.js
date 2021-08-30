import React from "react";
import NoteCard from "./NoteCard";
import Loading from "./Loading";

const NoteList = () => {
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <NoteCard />
    </div>
  );
};

export default NoteList;
