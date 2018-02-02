import React, { Component } from 'react';
import Modal from './Modal/Modal';
import styled from 'styled-components';

const ModalPageContainer = styled.div`
    padding: 20px;
`

class ModalPage extends Component {
    constructor() {
        super();
        this.state = {
            modalShown: false
        }
    }

    changeShowModal = () => {
        var modalShown = {...this.state.modalShown}
        modalShown = !this.state.modalShown;
        this.setState({modalShown: modalShown});
    }

    render() {
        const modalShown = this.state.modalShown;
        console.log(modalShown)

        return (
            <ModalPageContainer>
                <h3>Modal</h3>
                <button onClick={this.changeShowModal}>Show Modal</button>
                <Modal modalShown={modalShown} changeShowModal={this.changeShowModal}/>
            </ModalPageContainer>
        );
    }
}

export default ModalPage;