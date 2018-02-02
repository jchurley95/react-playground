import React from 'react';
import { 
            ModalContainer, 
            ModalContent, 
            ModalBackground, 
            ModalBanner, BannerContent, 
            BannerMessage, 
            CloseModal,
            ModalBody 
        } from './Styled/Modal.styled';

const Modal = (props) => {
    const modalShown = props.modalShown;

    if (modalShown) {
        return (
            <div>
                <ModalContainer>
                    <ModalContent>
                        <ModalBanner>
                            <BannerContent>
                                <BannerMessage>Hey I'm a modal. Click outside of me to close me.</BannerMessage>
                                <CloseModal onClick={props.changeShowModal}>X</CloseModal>
                            </BannerContent>
                        </ModalBanner>
                        <ModalBody>
                            
                        </ModalBody>
                    </ModalContent>
                </ModalContainer>
                <ModalBackground onClick={props.changeShowModal} ></ModalBackground>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Modal;