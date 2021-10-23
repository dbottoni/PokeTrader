/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  //   function showNavigation() {
  //     if (Auth.loggedIn()) {
  //       return (
  //         <ul className="flex-row">
  //           <li className="mx-1">
  //             <Link to="/orderHistory">
  //               Order History
  //             </Link>
  //           </li>
  //           <li className="mx-1">
  //             {/* this is not using the Link component to logout or user and then refresh the application to the start */}
  //           </li>
  //         </ul>
  //       );
  //     } else {
  //   return (
  //     <ul className="flex-row">
  //       <li className="mx-1">
  //         <Link to="/signup">
  //           Signup
  //         </Link>
  //       </li>
  //       <li className="mx-1">
  //         <Link to="/login">
  //           Login
  //         </Link>
  //       </li>
  //     </ul>
  //   );
  // }
  //   }

  return (
    <header>
      <h1 className="content has-text-centered m-6 is-large is-full">
        PokeTrader
      </h1>

      <nav className="navbar">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div className="navbar-menu container">
          <div className="navbar-start">
            <Link to="/">
              <a className="navbar-item" onClick={''}>
                HOME
              </a>
            </Link>
            <Link to="/trade">
              <a className="navbar-item">TRADE</a>
            </Link>
            <Link to="/team">
              <a className="navbar-item">TEAM</a>
            </Link>
          </div>

          <div className="navbar-end mt-3 mb-3">
            <Link to="/signup">
              <a className="button is-primary">Sign Up</a>
            </Link>
            <Link to="/login">
              <a className="button is-primary">Login</a>
            </Link>
            <Link to="/account">
              <a className="button is-primary">Account</a>
            </Link>
            <Link to="/logout">
              <a className="button is-primary">Logout</a>
              {/* <a href="/" className="button is-primary" onClick={() => Auth.logout()}>Logout</a> */}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;