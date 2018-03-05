import React from 'react';
import styled from 'styled-components';

const ExampleModalContentContainer = styled.div`
    padding: 20px;
`

const ExampleContentParagraph = styled.p`
    
`

const ExampleModalContent = () => {
    return (
        <ExampleModalContentContainer>
            <ExampleContentParagraph>You can create child components like this ExampleModalContent one to be used for the content of the modal.</ExampleContentParagraph>
            <ExampleContentParagraph>Click the area outside the modal to close it.</ExampleContentParagraph> 
            <ExampleContentParagraph>You can also click the 'X' to close this guy.</ExampleContentParagraph>
        </ExampleModalContentContainer>
    );
};

export default ExampleModalContent;