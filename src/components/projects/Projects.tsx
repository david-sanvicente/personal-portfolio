import React, { Component } from "react";
import "./styles.scss";
import sprayrbg from "../../assets/images/sprayrbg.jpg";
import botbuddiesbg from "../../assets/images/botbuddiesbg.jpg";

export default class Projects extends Component {
  render() {
    return (
      <section id={`projects`} className={`projects`}>
        <h1 className={`heading`}>Projects</h1>
        <div className={`projects__grid`}>
          <div className={`project`}>
            <div className={`col-1`}>
              <h3 className={`heading-secondary`}>
                <span className="highlight">Dave's Guitar Stop</span>
              </h3>
              <div className={`project__display`}>
                <div className={`project__display__poster`}>
                  <a
                    href={`https://github.com/david-sanvicente/ecommerce-rebuild-2021`}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/david-sanvicente/ecommerce-rebuild-2021/master/uploads/dgs-screen.png`}
                      alt={`Project Thumbnail`}
                    />
                  </a>
                </div>
                <div className={`project__display__actions`}>
                  <a
                    href={`https://daves-guitar-stop.herokuapp.com/`}
                    className={`link`}
                  >
                    <i className="fas fa-desktop"></i>
                    <span className="highlight">Heroku Demo</span>
                  </a>
                  {/* <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a> */}
                  <a
                    href={`https://github.com/david-sanvicente/ecommerce-rebuild-2021`}
                    className={`link`}
                  >
                    <i className="fas fa-code-branch"></i>
                    <span className="highlight">View Source</span>
                  </a>
                </div>
                <p className={"aside"}>
                  Fully-featured e-commerce web shop written in full stack
                  JavaScript.
                </p>
              </div>
              <div className={`project__technologies`}>
                <p className={`small-section-title`}>Technologies Used</p>
                <ul className={`project__technologies__list`}>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>React Hooks</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Redux</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Node.js</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Express</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Mongoose ORM</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>MongoDB</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>React Bootstrap</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`col-2`}>
              <div className={`project__detail-section`}>
                <p className={`small-section-title`}>My Role</p>
                <p>
                  This project is a complete rebuild of a 2019 project written
                  while I attended a code bootcamp in New York City. I am the
                  sole author of this particular project, having coded for all
                  features across the entire stack.{" "}
                </p>
                {/* <p>
                  Early in this project, I deployed the{" "}
                  <span className={`highlight`}>front-end components</span> for
                  rendering the all products page and the single product view as
                  well as, on the back-end, having written the application's{" "}
                  <span className={`highlight`}>APIs in Express</span> and the{" "}
                  <span className={`highlight`}>ORM in Sequelize</span>.
                </p> */}
              </div>
              <div className={`project__detail-section`}>
                <p className={`small-section-title`}>Project Difficulties</p>
                <p>
                  In the spring of 2021, the code I had originally deployed on
                  Heroku became deprecated due to changes to the Sequelize ORM.
                  Also, the front-end of the original project was composed when
                  React was a Class-based framework. Today, companies prefer
                  function-based components using React Hooks. These necessary
                  updates were enough for me to make the decision to upgrade my
                  skillset by building an entirely new application showcasing
                  contemporary technologies.
                </p>
                {/* <p>
                  The greatest challenge we encountered was in designing our{" "}
                  <span className={`highlight`}>database schema</span>. Our
                  initial tables were overloaded and weren't serving our
                  application data properly, as we attempted to store the user's
                  cart information in the same table as the orders.
                </p> */}
              </div>
              <div className={`project__detail-section`}>
                <p className={`small-section-title`}>My Solution</p>
                <p>
                  I made the decision to update my skills and compose the new
                  front end using React Hooks. Much of the Express middleware
                  remained fundamentally the same, though this new project also
                  includes JWT tokens for authenticating logins and protecting
                  routes. On the back end, this time I went with MongoDB to
                  learn how to employ a NoSQL database. The final result was a
                  more fully-featured application than its predecessor standing
                  on a much more robust stack.
                </p>
                {/* <p>
                  To resolve this, we used{" "}
                  <span className={`highlight`}>local storage</span> to have our
                  cart data persist across{" "}
                  <span className={`highlight`}>sessions</span>, simplifying our
                  database schema and creating a more performant application.
                </p> */}
              </div>
              {/* <div className={`project__detail-section`}>
                <p className={`small-section-title`}>Notable Features</p>
                <ul
                  className={
                    "project__technologies__list project__technologies__list--no-grid"
                  }
                >
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Full featured shopping cart</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Product reviews and ratings</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Top products carousel</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Product pagination</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Product search feature</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>User profile with orders</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Admin product management</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Admin user management</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Admin Order details page</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Mark orders as delivered option</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Checkout process (shipping, payment method, etc)</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>PayPal / credit card integration</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Database seeder (products & users)</p>
                  </li>
                </ul>
              </div> */}
            </div>

            <div className={`col-3`}>
              <p className={`small-section-title`}>Notable Features</p>
              <ul
                className={
                  "project__technologies__list project__technologies__list--no-grid"
                }
              >
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Full featured shopping cart</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Product reviews and ratings</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Top products carousel</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Product pagination</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Product search feature</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>User profile with orders</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Admin product management</p>
                </li>
              </ul>
            </div>
            <div className={`col-3`}>
              <ul
                className={
                  "project__technologies__list project__technologies__list--no-grid"
                }
              >
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Admin user management</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Admin Order details page</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Mark orders as delivered option</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Checkout process (shipping, payment method, etc)</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>PayPal / credit card integration</p>
                </li>
                <li>
                  <i className="fas fa-dot-circle"></i>
                  <p>Database seeder (products & users)</p>
                </li>
              </ul>
            </div>
          </div>

          <hr />
          <div className={`project`}>
            <div className={`col-1`}>
              <h3 className={`heading-secondary`}>
                <span className="highlight">Spray-R</span>
              </h3>
              <div className={`project__display`}>
                <div className={`project__display__poster`}>
                  <a href={`https://www.youtube.com/watch?v=p1x6HlvMUgU`}>
                    <img src={sprayrbg} alt={`Project Thumbnail`} />
                  </a>
                </div>
                <div className={`project__display__actions`}>
                  <a
                    href={`https://www.youtube.com/watch?v=p1x6HlvMUgU`}
                    className={`link`}
                  >
                    <i className="fas fa-desktop"></i>
                    <span className="highlight">View Demo</span>
                  </a>
                  {/* <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a> */}
                  <a
                    href={`https://github.com/string-cheese-fsa/spray-r`}
                    className={`link`}
                  >
                    <i className="fas fa-code-branch"></i>
                    <span className="highlight">View Source</span>
                  </a>
                </div>
                <p className={"aside"}>
                  Spray-R is a mobile{" "}
                  <span className={"highlight"}>augmented reality</span>{" "}
                  graffiti app. Draw on real world surfaces and share your art
                  with users nearby.
                </p>
              </div>
              <div className={`project__technologies`}>
                <p className={`small-section-title`}>Technologies Used</p>
                <ul className={`project__technologies__list`}>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>React Native</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Redux</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>ViroReact</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Node.js</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Express</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Sequelize</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>PostgreSQL</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-2`}>
              <div className={`project__detail-section`}>
                <p className={`small-section-title`}>My Role</p>
                <p>
                  In this group project, I worked extensively on the{" "}
                  <span className={`highlight`}>reducer</span>. This held our
                  application state data, a 2D array containing the coordinate
                  points that represent what the user draws. I also completed
                  the <span className={`highlight`}>Download</span>{" "}
                  functionality, which allows for users to view graffiti created
                  by other users while at the location of the art's creation.
                </p>
              </div>
              <div className={`project__detail-section`}>
                <p className={`small-section-title`}>Project Difficulties</p>
                <p>
                  During development, we discovered that the Viro library we
                  were using was incapable of rendering any non-Viro components
                  to our AR scene. This presented a serious problem to our
                  application, as Viro's Navigator Component wouldn't facilitate
                  the passing of data between our parent and child components.
                </p>
              </div>
              <div className={`project__detail-section`}>
                <p className={`small-section-title`}>Solutions</p>
                <p>
                  To resolve this, we implemented{" "}
                  <span className="highlight">Redux</span> to connect the two
                  components via a single store, bypassing the Navigator and
                  allowing our graffiti component to draw on the Viro AR plane.
                </p>
              </div>
              <div className={`project__detail-section`}>
                <p className={`small-section-title`}>Notable Features</p>
                <ul
                  className={
                    "project__technologies__list project__technologies__list--no-grid"
                  }
                >
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Augmented Reality</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Geo-caching</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </section>
    );
  }
}
