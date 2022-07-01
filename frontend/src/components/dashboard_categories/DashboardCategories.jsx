import { Link } from "react-router-dom";

import conception from "@assets/pictures/conception.png";
import project from "@assets/pictures/project.png";
import techSpace from "@assets/pictures/tech_space.png";
import clientSpace from "@assets/pictures/client_space.png";
import chat from "@assets/pictures/chat.png";

import "./DashboardCategories.css";

export default function DashboardCategories() {
  return (
    <div className="dash-cat-container">
      <div>
        <div>
          <h2>Conception</h2>
        </div>
        <img src={conception} alt="njn" />
        <div>
          <Link
            className="dash-cat-button"
            to="/conception"
            aria-label="Aller sur la page des outils d'aide à la concetion de projets"
            title="Accéder aux outils de conception"
          >
            Accéder
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h2>Gestion de projet</h2>
        </div>
        <img src={project} alt="Réunion professionnelle en vue plongeante" />
        <div>
          <Link
            className="dash-cat-button"
            to="/project"
            aria-label="Aller sur la page des projets"
            title="Accéder aux projets"
          >
            Accéder
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h2>Espace technique</h2>
        </div>
        <img src={techSpace} alt="Bureau équipé d'un ortinateur portable" />
        <div>
          <Link
            className="dash-cat-button"
            to="/technique"
            aria-label="Aller sur la page du référentiel technique"
            title="Accéder au référentiel technique"
          >
            Accéder
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h2>Espace client</h2>
        </div>
        <img src={clientSpace} alt="Deux personnes qui se serrent la main" />
        <div>
          <Link
            className="dash-cat-button"
            to="/client"
            aria-label="Aller sur la page du listing des client"
            title="Accéder à la liste des clients"
          >
            Accéder
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h2>Chat</h2>
        </div>
        <img src={chat} alt="feffe" />
        <div>
          <Link
            className="dash-cat-button"
            to="/chat"
            aria-label="Aller sur le chat"
            title="Accéder au chat"
          >
            Accéder
          </Link>
        </div>
      </div>
    </div>
  );
}
