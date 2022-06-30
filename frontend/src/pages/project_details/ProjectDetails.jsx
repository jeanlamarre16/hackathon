import React from "react";

export default function ProjectDetails() {
  return (
    <div>
      <h1>Nom de projet</h1>
      <p>date de début</p>
      <div>
        <h2>Description</h2>
        <p>
          <span>tag 1</span> <span>tag 2</span> <span>tag 2</span>{" "}
          <span>tag 3</span>
        </p>
        <div>
          <progress value="60" max="100">
            60%
          </progress>
          <progress value="60" max="100">
            Budget consommé
          </progress>
        </div>
        <p>taches</p>
        <div>
          <p>
            ref tache <i className="fa-solid fa-square-caret-down" />
          </p>
        </div>
      </div>
    </div>
  );
}
