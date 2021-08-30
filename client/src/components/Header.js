import React from "react";
import Logo from "../images/notes.svg";

const Header = () => {
  return (
    <div className="bg-gray-900 w-full h-20 flex items-center px-4">
      <a
        href="#"
        className="font-bold text-xl text-white flex space-x-4 items-center"
      >
        <img src={Logo} alt="Logo" className="h-10 w-10" />
        <p>Notes</p>
      </a>
    </div>
  );
};

export default Header;
