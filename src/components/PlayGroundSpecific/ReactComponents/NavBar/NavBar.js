import React from 'react';
import { Nav, ComponentLink } from '../../StyledComponents/Nav.styled';

const NavBar = (props) => {
    var components = props.components;

    return (
        <Nav>
            <h3>Components:</h3>
            {
                components.map((component, key) => {
                    return (
                        <ComponentLink to={component.path} key={key}>{component.name}</ComponentLink>
                    )
                })
            }
        </Nav>
    );
};

export default NavBar;