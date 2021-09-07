import React from "react";
import Logo from "../images/notes.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900 w-full h-20 flex items-center px-4">
      <Link to="/">
        <a
          href="#"
          className="font-bold text-xl text-white flex space-x-4 items-center"
        >
          <img src={Logo} alt="Logo" className="h-10 w-10" />
          <p>Notes</p>
        </a>
      </Link>
    </div>
  );
};

export default Header;
