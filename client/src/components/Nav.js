/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Auth from "../../src/utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <h1 className="content has-text-centered m-6 is-large is-full">
        PocketTrader
      </h1>

      <nav className="navbar">
        {/* <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}

        <div className="navbar-menu container">
          <div className="navbar-start">
            {Auth.loggedIn() ? (
              <>
                <Link to="/">
                  <p className="navbar-item">
                    HOME
                  </p>
                </Link>
                <Link to="/trade">
                  <p className="navbar-item">TRADE</p>
                </Link>
                <Link to="/team">
                  <p className="navbar-item">TEAM</p>
                </Link>
                <Link to="/trainers">
                  <a className="navbar-item">TRAINERS</a>
                </Link>
              </>
            ) : (
              <>
                <Link to="/">
                  <p className="navbar-item">
                    HOME
                  </p>
                </Link>
              </>
            )}
          </div>

          <div className="navbar-end mt-3 mb-3">
            {Auth.loggedIn() ? (
              <>
                {/* <Link to="/account">
                  <a className="button is-primary">Account</a>
                </Link> */}
                <Link to="/logout">
                  <p href="/" className="button is-primary" onClick={() => Auth.logout()}>Logout</p>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <p className="button is-primary">Sign Up</p>
                </Link>
                <Link to="/login">
                  <p className="button is-primary">Login</p>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
