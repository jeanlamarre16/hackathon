import { Link } from "react-router-dom";

import conception from "@assets/pictures/conception.png";
import project from "@assets/pictures/project.png";
import techSpace from "@assets/pictures/tech_space.png";
import clientSpace from "@assets/pictures/client_space.png";
import chat from "@assets/pictures/chat.png";

import "./DashboardCategories.css";

export default function DashboardCategories() {
  return (
    <div className="d-categories-container">
      <div>
        <img src={conception} alt="njn" />
        <div>
          <p className="dash-cat-button">Conception</p>
        </div>
      </div>
      <div>
        <img src={project} alt="nne" />
        <div>
          <p>
            <Link
              className="dash-cat-button"
              to="/project"
              aria-label="Aller sur la page des projets"
              title="Accéder aux projets"
            >
              Gestion du projet
            </Link>
          </p>
        </div>
      </div>
      <div>
        <img src={techSpace} alt="ddc" />
        <div>
          <p className="dash-cat-button">Espace technique</p>
        </div>
      </div>
      <div>
        <img src={clientSpace} alt="dds" />
        <div>
          <p className="dash-cat-button">Espace client</p>
        </div>
      </div>
      <div>
        <img src={chat} alt="feffe" />
        <div>
          <p className="dash-cat-button">Chat</p>
        </div>
      </div>
    </div>
  );
}
