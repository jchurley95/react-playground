import React from 'react';
import { LandingPageContainer, ComponentLink } from './Styled/LandingPage.styled';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    console.log(props)
    return (
        <LandingPageContainer>
            <h3>Component List:</h3>
            {
                props.pages.map((page, index) => {
                    return (
                        <ComponentLink to={page.path}>{page.name}<hr /></ComponentLink>
                    )
                })
            }
        </LandingPageContainer>
    );
};

export default LandingPage;