import React, {Component} from 'react';
import pixelate from '../../assets/images/pixelate.png';
import whackamole from '../../assets/images/whackamole.png';
import shoppingcart from '../../assets/images/shoppingCart.png';
import './styles.scss';

export default class Tiles extends Component {
    render(){
        return(
            <React.Fragment>
                <div id={`tiles`} className={`tiles`}>
                    <div className={`tile`}>
                        <h3 className={`heading-secondary`}><span className='highlight'>Whack-A-Mole!</span></h3>
                        <div className={`project__display`}>
                            <div className={`project__display__poster`}>
                                <a href={`https://mole-whack.netlify.app`}>
                                    <img src={whackamole} alt={`Project Thumbnail`} />
                                </a>
                            </div>
                            <div className={`project__display__actions`}>
                                <a href={`https://mole-whack.netlify.app`} className={`link`}><i className="fas fa-desktop"></i><span className="highlight">View Demo</span></a>
                                {/* <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a> */}
                                <a href={`https://github.com/david-sanvicente/whack-a-mole`} className={`link`}><i className="fas fa-code-branch"></i><span className="highlight">View Source</span></a>
                            </div>
                            <p className={'aside'}>A whack-a-mole game in <span className={`highlight`}>Javascript</span>. Whack 20 moles to win. Demonstrates <span className={`highlight`}>event blubbling</span> and use of the Math Class.</p>
                        </div>
                        <div className={`project__technologies`}>
                            <ul className={`project__technologies__list`}>
                                <li><i className="fas fa-dot-circle"></i><p>HTML</p></li>
                                <li><i className="fas fa-dot-circle"></i><p>CSS</p></li>
                                <li><i className="fas fa-dot-circle"></i><p>JavaScript</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`tile`}>
                        <h3 className={`heading-secondary`}><span className='highlight'>Pixelate</span></h3>
                        <div className={`project__display`}>
                            <div className={`project__display__poster`}>
                                <a href={`https://pixelate-draw.netlify.app`}>
                                    <img src={pixelate} alt={`Project Thumbnail`} />
                                </a>
                            </div>
                            <div className={`project__display__actions`}>
                                <a href={`https://pixelate-draw.netlify.app`} className={`link`}><i className="fas fa-desktop"></i><span className="highlight">View Demo</span></a>
                                {/* <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a> */}
                                <a href={`https://github.com/david-sanvicente/pixelate`} className={`link`}><i className="fas fa-code-branch"></i><span className="highlight">View Source</span></a>
                            </div>
                            <p className={'aside'}>Make 8-bit art! Uses <span className={`highlight`}>JavaScript</span> to add and remove columns and rows to the <span className={`highlight`}>table</span>. Changes cell colors by reassigning the clicked target's <span className={`highlight`}>className</span> property.</p>
                        </div>
                        <div className={`project__technologies`}>
                            <ul className={`project__technologies__list`}>
                                <li><i className="fas fa-dot-circle"></i><p>HTML</p></li>
                                <li><i className="fas fa-dot-circle"></i><p>CSS</p></li>
                                <li><i className="fas fa-dot-circle"></i><p>JavaScript</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`tile`}>
                        <h3 className={`heading-secondary`}><span className='highlight'>Shopping Cart</span></h3>
                        <div className={`project__display`}>
                            <div className={`project__display__poster`}>
                                <a href={`https://shopcartjs.netlify.app/`}>
                                    <img src={shoppingcart} alt={`Project Thumbnail`} />
                                </a>
                            </div>
                            <div className={`project__display__actions`}>
                                <a href={`https://shopcartjs.netlify.app/`} className={`link`}><i className="fas fa-desktop"></i><span className="highlight">View Demo</span></a>
                                {/* <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a> */}
                                <a href={`https://github.com/david-sanvicente/shoppingcart`} className={`link`}><i className="fas fa-code-branch"></i><span className="highlight">View Source</span></a>
                            </div>
                            <p className={'aside'}>A classic shopping cart application in <span className={`highlight`}>JavaScript</span>. The app renders list items to and from <span className={`highlight`}>collections</span> and makes use of event listeners and input fields. To update the cart, it uses a <span className={`highlight`}>search algorithm</span> using a boolean flag.</p>
                        </div>
                        <div className={`project__technologies`}>
                            <ul className={`project__technologies__list`}>
                                <li><i className="fas fa-dot-circle"></i><p>HTML</p></li>
                                <li><i className="fas fa-dot-circle"></i><p>CSS</p></li>
                                <li><i className="fas fa-dot-circle"></i><p>JavaScript</p></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}