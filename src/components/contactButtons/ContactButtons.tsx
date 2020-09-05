import React from 'react';
import ModalPortal from "../portals/modalPortal/ModalPortal";
import ModalHandler from '../ModalHandler';

export default class ContactButtons extends React.Component<{}, {modalOpen: boolean}>{

    constructor(props: {}){
        super(props);
        this.state = {
            modalOpen: false
        }
    }

    handleOpenModalClick = (e: React.MouseEvent) => {
        e.preventDefault();
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    render() {

        return (
            <React.Fragment>
                <a href={`https://www.linkedin.com/in/davidsanvicente/`} className={`action`} target={`_blank`}>
                    <i className="fab fa-linkedin-in"></i>
                    <span><strong>LinkedIn</strong></span>
                </a>
                <a href={`https://github.com/david-sanvicente`} className={`action`} target={`_blank`}>
                    <i className="fab fa-github"></i>
                    <span><strong>Github</strong></span>
                </a>
                <a href={`https://drive.google.com/file/d/1VrxIlvWJUZJPrqPIaRQOzAPP-pieyikU/view?usp=sharing`} className={`action`} target={`_blank`}>
                    <i className="fas fa-newspaper"></i>
                    <span><strong>Resume</strong></span>
                </a>
                { this.state.modalOpen && 
                    <ModalPortal>
                        <ModalHandler close={this.toggleModal}>
                            {({ animateOut, bodyClick, closeClick }) => (
                                <div className={`modal-container ${animateOut ? 'modal-container--animate-out' : ''}`} onClick={closeClick}>
                                    <div className={`modal ${animateOut ? 'modal--animate-out' : ''}`} onClick={bodyClick}>
                                        <div className={`modal__title`} >
                                            <p>My Email</p>
                                        </div>
                                        <div className={`modal-body`} >
                                            <div className={`my-email`}>
                                                <p >david.sanvicente.js@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </ModalHandler>
                    </ModalPortal>
                }
            </React.Fragment>
        );

    }

}