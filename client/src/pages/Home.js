import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body columns container home-container">
        <div className="column">
          <p className="tagline">STOP & SHOCK</p>
          <p className="home title">ELECTRIC TYPES</p>
          <Link to="/trade">
          <p className="is-underlined subtitle">SHOP THE FULL COLLECTION NOW</p>
          </Link>
          <img className="home2" src="/images/179.png" />

        </div>
        <div className="column">
          <img className="home" src="/images/025.png" />
        </div>
      </div>
    </section>
  );
};

export default Home;