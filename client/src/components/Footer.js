import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="columns">
          <a className="column">Home</a>
          <a className="column">About PokeTraders</a>
        </div>
        <p className="footer-yellow">
          <span class="copyright">&#169;</span>2021 PocketTraders{" "}
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
