import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link
        className="nav-item"
        to="/dashboard"
        aria-label="Aller sur l'accueil principal du dasboard"
        title="Accéder à l'accueil du dashboard"
      >
        <i className="fa fa-solid fa-home" aria-hidden="true" /> Accueil du
        dashboard
      </Link>
      <Link
        className="nav-item"
        to="/project"
        aria-label="Aller sur la page des projets"
        title="Accéder aux projets"
      >
        <i className="fa fa-solid fa-diagram-project" aria-hidden="true" />{" "}
        Projets
      </Link>
      <Link
        className="nav-item"
        to="/add-project"
        aria-label="Ajouter un projet"
        title="Ajouter un projet"
      >
        <i className="fa fa-solid fa-circle-plus" aria-hidden="true" /> Ajouter
        un projet
      </Link>
    </nav>
  );
}
