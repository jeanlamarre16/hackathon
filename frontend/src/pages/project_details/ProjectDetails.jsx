/* import React, { useEffect, useState } from "react";
import axios from "axios";
*/
import "./ProjectDetails.css";
/* import { useParams } from "react-router-dom"; */
import logo from "../../assets/pictures/apside-logo.png";
import tPot from "../../assets/pictures/t-pot.png";

export default function ProjectDetails() {
  /* const { id } = useParams();
   const [projectData, setProjectData] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/project/${id}`)
      .then((response) => setProjectData(response.data));
  }, []);
*/
  return (
    <>
      <h1>Ressources Humaines</h1>
      <p>date de début : 15/02/2022</p>
      <div className="container-project-details">
        <div className="div-bloc1">
          <div className="div-projDetails">
            <h2>Description</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              illum, molestiae maxime error explicabo perspiciatis totam
              reprehenderit quaerat magni suscipit quasi temporibus deserunt
              ratione porro optio ut consequatur blanditiis corrupti. Autem
              iusto mollitia repudiandae officia dolorem fugit laborum officiis
              numquam aliquid quidem consectetur ipsum voluptatem odio, sint
              quaerat corrupti aperiam totam, a odit quam illum deserunt minima
              nobis maxime! Nesciunt.
            </p>
          </div>
          <div className="div-progress-bar">
            <span className="span-1">progression</span>
            <progress value="60" max="100">
              60%
            </progress>
            <span className="span-2">Budget consommé</span>
            <progress value="35" max="100">
              Budget consommé
            </progress>
          </div>
          <div>
            <h2>Tâches</h2>
            <ul className="description">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, repudiandae. Quod iusto recusandae error porro
                debitis
              </li>
              <li>
                veritatis reiciendis sequi, earum expedita provident magnam
                asperiores unde explicabo eligendi inventore magni aut.
              </li>
              <li>
                veritatis reiciendis sequi, earum expedita provident magnam
                asperiores unde explicabo eligendi inventore magni aut.
              </li>
            </ul>
            <p className="reference">
              Réf tache 1<i className="fa-solid fa-square-caret-down" />
            </p>
            <p className="reference">
              Réf tâche 2<i className="fa-solid fa-square-caret-down" />
            </p>
          </div>
        </div>

        <div className="div-bloc2">
          <img src={logo} alt="logo entreprise" className="logo" />
          <div className="card-bloc2">
            <img src={tPot} alt="logo http error 418" />
            <p>Nom du responsable</p>
            <p>mail du responsable</p>
          </div>
          <button type="button">Participer à ce projet</button>
        </div>
      </div>
    </>
  );
}
