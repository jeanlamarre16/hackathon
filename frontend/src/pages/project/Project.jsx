import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Project.css";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/project")
      .then((response) => setProjects(response.data));
  }, []);

  return (
    <div className="div-project">
      <h1>Nos Projets</h1>
      <div className="container-bloc-affichage">
        <div className="blocAffichage">
          {projects.map((project) => {
            return (
              <>
                <h2>{project.project_domain}</h2>
                <p>
                  {`${project.project_name} | ${project.created_at} | ${project.id_city}`}{" "}
                  |<i className="fa-solid fa-pencil" /> |
                  <Link to={`./${project.id}`}>
                    <i className="fa-solid fa-user-plus" />
                  </Link>
                </p>
                <progress value={project.progression} max="100">
                  {project.progression}
                </progress>
              </>
            );
          })}
        </div>
        <div className="blocAffichage">
          {projects.map((project) => {
            return (
              <>
                <h2>&nbsp;</h2>
                <p>{`${project.project_name} | ${project.created_at} | ${project.id_city}`}</p>
                <progress value={project.progression} max="100">
                  {project.progression}
                </progress>
              </>
            );
          })}
        </div>
      </div>
      <div className="div-button">
        <button type="button">Ajouter un projet</button>
        <button type="button">Logout</button>
      </div>
    </div>
  );
}
