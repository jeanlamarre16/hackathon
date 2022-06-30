import React from "react";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  return (
    <>
      <h1>Nom de projet</h1>
      <p>date de début</p>
      <div className="container-project-details">
        <div className="div-bloc1">
          <div className="div-projDetails">
            <h2>Description</h2>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              assumenda eaque mollitia autem eveniet deleniti aliquid, voluptas
              iure ut, itaque praesentium? Amet odit sit harum vitae. Nam ex
              rerum similique? Deserunt, voluptatibus. Laboriosam, voluptatibus
              tenetur at placeat a cumque eos est eaque saepe, voluptas nulla
              fuga fugiat eveniet architecto quibusdam maiores sunt iure. Ipsum
              labore, eveniet quae iure itaque libero. Omnis culpa obcaecati
              quos voluptatem? Reprehenderit dolor praesentium a porro quisquam
              distinctio sequi quidem magnam voluptatem officia minima, ab quae?
              Voluptatum laboriosam optio similique nihil impedit, ea quis
              eligendi error?
            </p>
          </div>
          <div>
            <progress value="60" max="100">
              60%
            </progress>
            <progress value="60" max="100">
              Budget consommé
            </progress>
          </div>

          <div>
            <h2>taches</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, repudiandae. Quod iusto recusandae error porro debitis
              veritatis reiciendis sequi, earum expedita provident magnam
              asperiores unde explicabo eligendi inventore magni aut.
            </p>
            <p>
              ref tache 1<i className="fa-solid fa-square-caret-down" />
              <p>
                ref tache 2 <i className="fa-solid fa-square-caret-down" />
              </p>
            </p>
          </div>
        </div>
        <div className="div-bloc2">
          <div className="card-bloc2" />
          <p>toto</p>
        </div>
      </div>
    </>
  );
}
