import React from 'react';
import { LandingPageContainer, ComponentLink } from './Styled/LandingPage.styled';

const LandingPage = () => {
    return (
        <LandingPageContainer>
            <ComponentLink to="/accordion">Accordion</ComponentLink>
            <ComponentLink to="/date-picker">DatePicker</ComponentLink>
            <ComponentLink to="/modal">Modal</ComponentLink>
        </LandingPageContainer>
    );
};

export default LandingPage;