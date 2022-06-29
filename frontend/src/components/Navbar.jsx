import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/project">Projets</Link>
        </li>
        <li>
          <Link to="/events">Evenements</Link>
        </li>
        <li>
          <Link to="/add-project">Ajouter un projet</Link>
        </li>
      </ul>
    </div>
  );
}
