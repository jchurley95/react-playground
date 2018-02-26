import React from 'react';
import { LandingPageContainer } from './Styled/LandingPage.styled';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    console.log(props)
    return (
        <LandingPageContainer>
            {
                props.pages.map((page, index) => {
                    return (<Link to={page.path}>{page.name}</Link>)
                })
            }
        </LandingPageContainer>
    );
};

export default LandingPage;