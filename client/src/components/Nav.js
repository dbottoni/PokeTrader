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
                  <a className="navbar-item">HOME</a>
                </Link>
                <Link to="/trade">
                  <a className="navbar-item">TRADE</a>
                </Link>
                <Link to="/team">
                  <a className="navbar-item">TEAM</a>
                </Link>
                <Link to="/trainers">
                  <a className="navbar-item">TRAINERS</a>
                </Link>
              </>
            ) : (
              <>
                <Link to="/">
                  <a className="navbar-item">HOME</a>
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
                  <a
                    href="/"
                    className="button is-primary"
                    onClick={() => Auth.logout()}
                  >
                    Logout
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <a className="button is-primary">Sign Up</a>
                </Link>
                <Link to="/login">
                  <a className="button is-primary">Login</a>
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
