import React from "react";

const About = () => {
  return (
    <section className="hero is-fullheight about-container">
      <div className="hero-body columns">
        {/* <div className="tile is-ancestor"> */}
        <div className="tile is-vertical">
          <div className="has-text-centered">
            <h1 className="form-header">Meet the Team!</h1>
          </div>

          {/* <p class="post-comment" contenteditable="false">${post.comment}</p> */}
          {/* <div className="tile"> */}

          <div className="tile is-parent is-vertical">
            {/* <article className="tile is-child notification is-info is">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-1by1">
                  <img src="./images/Dana.png" width="50" height="50"  alt="photo of Dana" />
                </figure>
              </article> */}
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info has-text-centered">
              <div className="content">
                <h4 className="content">BAIYANG</h4>
                <h6 className="content">Qi</h6>
              </div>
              <figure className="image is-1by1">
                <img
                  className="is-rounded"
                  src="./images/Baiyang.png"
                  alt="photo of Baiyang"
                />
              </figure>
              <div className="roles">
                <ul className="roles">
                  <li className="role">Back-End</li>
                  <li className="role">GraphQL</li>
                  <li className="role">API-Express/Pokemon</li>
                  <li className="role">Pro-DeBugger</li>
                  
                </ul>
              </div>
            </article>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <article className="tile is-child notification is-info has-text-centered">
              <div className="content">
                <h4 className="content">BEN</h4>
                <h6 className="content">Gallagher</h6>
              </div>
              <figure className="image is-1by1">
                <img
                  className="is-rounded"
                  src="./images/Ben.jpg"
                  alt="photo of Ben"
                />
              </figure>
              <div className="roles">
                <ul className="roles">
                  <li className="role">Front-End</li>
                  <li className="role">React</li>
                  <li className="role">GraphQL</li>
                  <li className="role">Concept Originator</li>
                  <li className="role">Pro-DeBugger</li>
                </ul>
              </div>
            </article>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <article className="tile is-child notification is-warning is-info has-text-centered ">
              <div className="content">
                <h4 className="content">DANA</h4>
                <h6 className="content">Bottoni</h6>
              </div>
              <figure className="image is-1by1">
                <img
                  className="is-rounded"
                  src="./images/Dana.png"
                  alt="photo of Dana"
                />
              </figure>
              <div className="roles">
                <ul className="roles">
                  <li className="role">Awesome Leader</li>
                  <li className="role">Front-End</li>
                  <li className="role">Back-End</li>
                  <li className="role">GraphQL</li>
                  <li className="role">React</li>
                </ul>
              </div>
            </article>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <article className="tile is-child notification is-info has-text-centered">
              <div className="content">
                <h4 className="content">EMILY</h4>
                <h6 className="content">Necciai Mayeski</h6>
              </div>

              <figure className="image is-1by1">
                <img
                  className="is-rounded"
                  src="./images/Emily.jpeg"
                  alt="photo of Emily"
                />
              </figure>
              <div className="roles">
                <ul className="roles">
                  <li className="role">Front-End</li>
                  <li className="role">React</li>
                  <li className="role">Framework</li>
                  <li className="role">File Structure</li>
                  <li className="role">Github Guru </li>
                </ul>
              </div>
            </article>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <article className="tile is-child notification is-info has-text-centered">
              <div className="content">
                <h4 className="content">GAYE</h4>
                <h6 className="content">Proctor</h6>
              </div>
              <figure className="image is-1by1">
                <img
                  className="is-rounded"
                  src="./images/Gaye.jpeg"
                  alt="photo of Gaye"
                />
              </figure>
              <div className="roles">
                <ul className="roles">
                  <li className="role">Front-End</li>
                  <li className="role">About Page</li>
                  <li className="role">Presentation</li>
                  <li className="role">README.md</li>
                </ul>
              </div>
            </article>
          </div>
          <div className="body is-parent notification is-warning">
            <div className="tile is-parent has-text-centered">
              <article className="tile is-child">
                <p className="subtitle">
                  <h1>ABOUT POCKET TRADERS</h1>
                </p>
                {/* <p className="subtitle">Aligned with the right tile</p> */}
                <p className="subtitle">
                  Since October 2021, we have been helping Pokemon Enthusiasts
                  who crave all things Pokemon to interact with one another
                  through our Pocket Traders trading card app.
                </p>

                <p>
                  Learn more about us, who we are, and what we stand for (which
                  is ALL THINGS POKEMON).
                </p>

                <p>
                  We’re a small team focused on creating more fun by creating
                  interactive, dynamic on-line trading cards for ALL AGES.
                  &nbsp;&nbsp;
                </p>

                {/* <div className="">Content </div> */}
              </article>
            </div>
          </div>
        </div>

        {/* <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img src="client/public/images/Dana.png" />
                </figure>
              </article> */}

        {/* <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">Content </div>
            </article>
          </div> */}
        {/* </div> */}
        {/* <div className="tile is-parent">
        <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-1by1">
                  <img src="./images/Dana.png" width="50" height="50"  alt="photo of Dana" />
                </figure>
              </article>
        </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;
