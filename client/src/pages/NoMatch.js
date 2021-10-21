import React from "react";

const NoMatch = () => {
  return (
    <div className="container">
      <div className="columns no-match-container is-centered">
        <div className="column is-one-third">
          <h1 className="no-match">404</h1>
          <p className="no-match">
            You seem to be lost. Use the navigation bar above to get where
            you're going.
          </p>
        </div>
        <div className="column is-one-third">
          <img className="no-match" src="/images/confused.png" />
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
