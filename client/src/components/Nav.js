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
        <p
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </p>

        <div className="navbar-menu container">
          <div className="navbar-start">
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
          </div>

          <div className="navbar-end mt-3 mb-3">
            <Link to="/signup">
              <p className="button is-primary">Sign Up</p>
            </Link>
            <Link to="/login">
              <p className="button is-primary">Login</p>
            </Link>
            <Link to="/account">
              <p className="button is-primary">Account</p>
            </Link>
            <Link to="/logout">
              <p className="button is-primary">Logout</p>
              {/* <a href="/" className="button is-primary" onClick={() => Auth.logout()}>Logout</a> */}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;