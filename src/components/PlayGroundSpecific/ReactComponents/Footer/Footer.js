import React from 'react';
import FooterContainer from '../../StyledComponents/Footer.styled';
import GoHomeLink from '../../StyledComponents/GoHome.styled';

const Footer = () => {
    return (
        <FooterContainer>
            <GoHomeLink to="/">Go Home</GoHomeLink>
        </FooterContainer>
    );
};

export default Footer;