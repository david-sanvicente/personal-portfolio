import React from 'react';
import Header from '../header/Header';
import TechnologiesBar from '../technologiesBar/TechnologiesBar';
import Projects from '../projects/Projects';
import Footer from '../footer/Footer';
import Tiles from '../tiles/Tiles';
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
                    <Tiles/>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}
