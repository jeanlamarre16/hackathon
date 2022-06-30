import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homeContainer">
      <section className="inputArea">
        <div className="inputFields">
          <div className="loginUserNameContainer">
            <input className="loginUserName" placeholder="Username" />
          </div>
          <div className="loginPasswordContainer">
            <input className="loginPassword" placeholder="Password" />
          </div>
          <button type="button">
            <Link
              to="/project"
              aria-label="Aller sur la page dashboard"
              title="Accéder au dashboard"
            >
              Login
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}
