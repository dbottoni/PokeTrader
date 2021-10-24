import React from "react";






const About = () => {
  return (
    

<section className="hero is-fullheight">
      <div className="hero-body columns container about-container">
        
    className="about-container">

      

      
      

        
  

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
        {/* <p class="post-comment" contenteditable="false">${post.comment}</p> */}
          <div className="tile">
            <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-info is">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-1by1">
                  <img src="./images/Dana.png" width="50" height="50"  alt="photo of Dana" />
                </figure>
              </article>
              
            </div>
            <div className="tile is-parent m-6is large is-full">
              <article className="tile is-child notification is-info ">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-1by1">
                  <img src="./images/Dana.png" width="50" height="50"  alt="photo of Dana" />
                </figure>
              </article>

              
              
              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-1by1">
                  <img src="./images/Dana.png" width="50" height="50"  alt="photo of Dana" />
                </figure>
              </article>

              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-1by1">
                  <img src="./images/Dana.png" width="50" height="50"  alt="photo of Dana" />
                </figure>
              </article>
            </div>
          </div>

          <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img src="client/public/images/Dana.png" />
                </figure>
              </article>

          {/* <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">Content </div>
            </article>
          </div> */}
        </div>
        {/* <div className="tile is-parent">
        <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-1by1">
                  <img src="./images/Dana.png" width="50" height="50"  alt="photo of Dana" />
                </figure>
              </article>
        </div> */}
      </div>
    </div>

    </section> 
  );
};

export default About;
