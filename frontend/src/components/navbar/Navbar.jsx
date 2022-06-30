import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">
            <i className="fa-light fa-building-columns" /> Accueil
          </Link>
        </li>
        <li>
          <Link to="/project">
            <i className="fa-solid fa-diagram-project" /> Projets
          </Link>
        </li>
        <li>
          <Link to="/add-project">
            <i className="fa-solid fa-circle-plus" /> Ajouter un projet
          </Link>
        </li>
      </ul>
    </div>
  );
}
