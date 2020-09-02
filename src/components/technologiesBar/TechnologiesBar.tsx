import React from 'react';
import './styles.scss';
import chai_logo from '../../assets/svgs/chai.svg';
import css_logo from '../../assets/svgs/css3.svg';
import git_logo from '../../assets/svgs/git.svg';
import html_logo from '../../assets/svgs/html5.svg';
import nodejs_logo from '../../assets/svgs/nodejs.svg';
import react_logo from '../../assets/svgs/react.svg';
import github_logo from '../../assets/svgs/github-2.svg';
import redux_logo from '../../assets/svgs/redux.svg';
import express_logo from '../../assets/svgs/express.svg';
import sequelize_logo from '../../assets/svgs/sequelize.svg';

export default class TechnologiesBar extends React.Component {
    render() {
        return (
            <div id={`technologies`} className={`technologies-bar`}>
                <div className={`container`}>
                    <img className={`technologies-bar__image`} src={github_logo} alt={`github`} />
                    <img className={`technologies-bar__image`} src={git_logo} alt={`git`} />
                    <img className={`technologies-bar__image`} src={chai_logo} alt={`chai`} />
                    <img className={`technologies-bar__image`} src={redux_logo} alt={`redux`} />
                    <img className={`technologies-bar__image`} src={react_logo} alt={`react`} />
                    <img className={`technologies-bar__image`} src={nodejs_logo} alt={`nodejs`} />
                    <img className={`technologies-bar__image`} src={express_logo} alt={`express.js`} />
                    <img className={`technologies-bar__image`} src={sequelize_logo} alt={`sequelize`} />
                    <img className={`technologies-bar__image`} src={css_logo} alt={`css`} />
                    <img className={`technologies-bar__image`} src={html_logo} alt={`html`} />


                </div>
            </div>
        )
    }
}
