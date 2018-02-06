import React from 'react';
import { LandingPageContainer } from './Styled/LandingPage.styled';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <LandingPageContainer>
            <Link to="/accordion">Accordion</Link>
            <Link to="/date-picker">DatePicker</Link>
            <Link to="/modal">Modal</Link>
        </LandingPageContainer>
    );
};

export default LandingPage;