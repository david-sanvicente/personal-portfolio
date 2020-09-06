import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}