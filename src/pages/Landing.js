import React from "react";
import Logo from "../components/Logo";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            An app that gives you a platform to log and keep track of all the
            jobs you apply to!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
