import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Project.css";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/project`)
      .then((response) => setProjects(response.data));
  }, []);

  return (
    <div className="div-project">
      <h1>Nos Projets</h1>
      <div className="blocAffichage">
        {projects.map((project) => {
          return (
            <>
              <h2>{project.project_domain}</h2>
              <p>{`${project.project_name} | ${project.created_at} | ${project.id_city}`}</p>
              <progress value={project.progression} max="100">
                {project.progression}
              </progress>
            </>
          );
        })}
      </div>
      <button type="button">Ajouter un nouveau projet</button>
      <button type="button">Logout</button>
    </div>
  );
}
