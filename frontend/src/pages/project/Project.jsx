import React from "react";
import "./Project.css";

export default function Project() {
  return (
    <div className="div-project">
      <h1>Nos Project</h1>
      <div className="bloc1">
        <h2>Développement</h2>
        <p>Nom du projet ! date début ! ville</p>
        <h2>Consulting</h2>
        <p>Nom du projet ! date début ! ville</p>
        <h2>Resources Humaines</h2>
        <p>Nom du projet ! date début ! ville</p>
        <h2>Communication</h2>
        <p>Nom du projet ! date début ! ville</p>
      </div>
      <div className="bloc2">
        <p>Nom du projet ! date début ! ville</p>
        <p>Nom du projet ! date début ! ville</p>
        <p>Nom du projet ! date début ! ville</p>
        <p>Nom du projet ! date début ! ville</p>
      </div>
      <button type="button">Ajouter un nouveau projet</button>
      <button type="button">Logout</button>
    </div>
  );
}
