import React from 'react';
import { SingleBarContainer } from './Styled/Barcode.styled';

const SingleBar = (props) => {
    return (
        <SingleBarContainer style={props.currentStyle}></SingleBarContainer>
    );
};

export default SingleBar;