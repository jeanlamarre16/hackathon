import { Link } from "react-router-dom";
import bulb from "../../assets/pictures/LoginContent.svg";
import "./Home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <section className="inputArea">
        <div
          className="inputFields"
          style={{ backgroundImage: `url(${bulb})` }}
        >
          <div className="loginUserNameContainer">
            <input className="loginUserName" placeholder="Username" />
          </div>
          <div className="loginPasswordContainer">
            <input className="loginPassword" placeholder="Password" />
          </div>
        </div>
        <button type="button">
          <Link
            to="/dashboard"
            aria-label="Aller sur la page dashboard"
            title="Accéder au dashboard"
          >
            Login
          </Link>
        </button>
      </section>
    </div>
  );
}
