import React from "react";

const Team = () => {

    const removeFromTeam = () => {
        console.log("Removed from Team");
    };
  
  return (
        <div className="container">
          <h2 className="content has-text-centered">Your Team</h2>
          <p className="content has-text-centered">You can only have six Pokemon on your team.</p>
    
          <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
            <div className="card column is-one-third">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="025.png" alt="data.sprites.back_default" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">data.name</p>
                    <p className="subtitle is-6">data.id</p>
                  </div>
                </div>
    
                <div className="content">
                  <p>data.base_experience</p>
                  <p>data.types[0].type.name</p>
                  <p className="subtitle is-6">Stats</p>
                    <ul>
                        <li>stats...</li>
                        <li>stats...</li>
                        <li>stats...</li>
                    </ul>


                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item" onClick={removeFromTeam}>
                  Remove From Team
                </a>
              </footer>
            </div>
          </div>
        </div>
      );
    };

export default Team;
