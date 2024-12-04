import React from "react";
import { Link } from "react-router-dom";
import logo_teachr from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gradient1 to-gradient2 text-text-color py-4 px-6 text-lg font-bold shadow-md">
      <nav className="flex justify-between items-center">
        <Link to="/" className="hover:underline">
        <img src={logo_teachr} alt="logo teach'r" className="  w-28 h-10"/>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/products" className="hover:underline">
              Produits
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover:underline">
              Catégories
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
