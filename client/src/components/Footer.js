import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column">
            <Link to="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="column">
            <Link to="/about">
              <a className="column">About PocketTrader</a>
            </Link>
          </div>
        </div>
        <p className="footer-yellow">
          <span className="copyright">&#169;</span>2021 PocketTraders{" "}
        </p>
        <p className="footer-yellow">
          {" "}
          Note that this is not a real site and we do not own Pokemon. This was
          done for a class project. Please do not sue us.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
