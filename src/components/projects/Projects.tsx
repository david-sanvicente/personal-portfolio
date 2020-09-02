import React, { Component } from 'react';
import './styles.scss';
import sprayrbg from '../../assets/images/sprayrbg.jpg';

export default class Projects extends Component {
    render() {
        return (
            <section id={`projects`} className={`projects`}>
                <h1 className={`heading`}>Projects</h1>
                <div className={`projects__grid`}>
                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}><span className='highlight'>Spray-R</span></h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <a href={`https://www.youtube.com/watch?v=p1x6HlvMUgU`}>
                                        <img src={sprayrbg} alt={`Project Thumbnail`} />
                                    </a>
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`https://www.youtube.com/watch?v=p1x6HlvMUgU`} className={`link`}><i className="fas fa-desktop"></i><span className="highlight">View Demo</span></a>
                                    {/* <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a> */}
                                    <a href={`https://github.com/string-cheese-fsa/spray-r`} className={`link`}><i className="fas fa-code-branch"></i><span className="highlight">View Source</span></a>
                                </div>
                                <p className={'aside'}>Spray-R is a mobile <span className={"highlight"}>augmented reality</span> graffiti app. Draw on real world surfaces and share your art with users nearby.</p>
                            </div>
                            <div className={`project__technologies`}>
                                <p className={`small-section-title`}>Technologies Used</p>
                                <ul className={`project__technologies__list`}>
                                    <li><i className="fas fa-dot-circle"></i><p>React</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Redux</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Viro</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Node.js</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Express</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Sequelize</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>PostgreSQL</p></li>
                                    {/* <li><i className="fas fa-dot-circle"></i><p>SinonJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Webpack</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Babel</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>HTML5</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>CSS3</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Sass</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Typescript</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Jest</p></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className={`col-2`}>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>My Role</p>
                                <p>In this group project I worked extensively on the <span className={`highlight`}>reducer</span>. This held our application state data, a 2D array containing the coordinate points that represent what the user draws. I also worked to complete the <span className={`highlight`}>Download</span> functionality, which pulled from the server geo-cached art objects saved by other nearby users and mapped it onto an AR plan on the user's device. </p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Project Difficulties</p>
                                <p>During development, we discovered that the Viro library we were using was incapable of rendering any non-Viro components to our AR scene. This presented a serious problem to our application, as Viro's "Navigator" Component wouldn't facilitate the passing of data between parent and child components.</p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>My Solution</p>
                                <p>To resolve this, we implemented <span className='highlight'>Redux</span> to connect the two components via a single store.</p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Notable Features</p>
                                <ul className={'project__technologies__list project__technologies__list--no-grid'}>
                                    <li><i className="fas fa-dot-circle"></i><p>Augmented Reality</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Geo-caching</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <hr />

                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}><span className='highlight'>My Project</span></h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <a href={`https://github.com/david-sanvicente`}>
                                        <img src={sprayrbg} alt={`Project Thumbnail`} />
                                    </a>
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`https://github.com/david-sanvicente`} className={`link`}><i className="fas fa-desktop"></i><span className="highlight">Live Demo</span></a>
                                    <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a>
                                    <a href={`https://github.com/david-sanvicente`} className={`link`}><i className="fas fa-code-branch"></i><span className="highlight">View Source</span></a>
                                </div>
                                <p className={'aside'}>Provide a short description of the application.</p>
                            </div>
                            <div className={`project__technologies`}>
                                <p className={`small-section-title`}>Technologies Used</p>
                                <ul className={`project__technologies__list`}>
                                    <li><i className="fas fa-dot-circle"></i><p>React</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Redux</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Viro</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Node.js</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Express</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Sequelize</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>PostgreSQL</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>SinonJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Webpack</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Babel</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>HTML5</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>CSS3</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Sass</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Typescript</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Jest</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-2`}>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>My Role</p>
                                <p>How did I contribute most meaninfully? Specifically, which modules did I work on and on which features?</p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Project Difficulties</p>
                                <p>Project difficulties, because there are always more than a few.</p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>My Solution</p>
                                <p>My solution goes here.</p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Notable Features</p>
                                <ul className={'project__technologies__list project__technologies__list--no-grid'}>
                                    <li><i className="fas fa-dot-circle"></i><p>Notable feature 1</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Notable feature 2</p></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    {/* <hr></hr>

                    <div className={`project`}>
                            <h3 className={`heading-secondary`}><span className='highlight'>My Project</span></h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <a href={`https://github.com/david-sanvicente`}>
                                        <img src={sprayrbg} alt={`Project Thumbnail`} />
                                    </a>
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`https://github.com/david-sanvicente`} className={`link`}><i className="fas fa-desktop"></i><span className="highlight">Live Demo</span></a>
                                    <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a>
                                    <a href={`https://github.com/david-sanvicente`} className={`link`}><i className="fas fa-code-branch"></i><span className="highlight">View Source</span></a>
                            </div>
                        </div>
                    </div>

                    <div className={`project`}>
                            <h3 className={`heading-secondary`}><span className='highlight'>My Project</span></h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <a href={`https://github.com/david-sanvicente`}>
                                        <img src={sprayrbg} alt={`Project Thumbnail`} />
                                    </a>
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`https://github.com/david-sanvicente`} className={`link`}><i className="fas fa-desktop"></i><span className="highlight">Live Demo</span></a>
                                    <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a>
                                    <a href={`https://github.com/david-sanvicente`} className={`link`}><i className="fas fa-code-branch"></i><span className="highlight">View Source</span></a>
                            </div>
                        </div>
                    </div>

                    <div className={`project`}>
                            <h3 className={`heading-secondary`}><span className='highlight'>My Project</span></h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <a href={`https://github.com/david-sanvicente`}>
                                        <img src={sprayrbg} alt={`Project Thumbnail`} />
                                    </a>
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`https://github.com/david-sanvicente`} className={`link`}><i className="fas fa-desktop"></i><span className="highlight">Live Demo</span></a>
                                    <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a>
                                    <a href={`https://github.com/david-sanvicente`} className={`link`}><i className="fas fa-code-branch"></i><span className="highlight">View Source</span></a>
                                </div>
                        </div>
                    </div> */}

                </div>
            </section>
        )
    }
}
