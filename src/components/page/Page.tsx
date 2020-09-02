import React from 'react';
import Header from '../header/Header';
import TechnologiesBar from '../technologiesBar/TechnologiesBar';
import Projects from '../projects/Projects';
import './styles.scss';
// import ContactButtons from '../contactButtons/ContactButtons';

export default class Page extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={`page-grid`}>
                    <Header />
                    <TechnologiesBar />
                    <Projects />
                    <footer id="footer" className={`footer`}>
                        <div className={`container`}>
                            <h1>Contact Me
                                <br /><small>Please reach out with any questions or feedback</small>
                            </h1>
                            <div id="emailMe">
                                <a href={`mailto:david.sanvicente.js@gmail.com?subject = Feedback&body = Message`}>
                                    <h4 id="emailMe">david.sanvicente.js@gmail.com</h4>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}
