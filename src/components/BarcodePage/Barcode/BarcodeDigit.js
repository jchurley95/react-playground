import React from 'react';
import { BarcodeDigitContainer } from './Styled/Barcode.styled';
import SingleBar from './SingleBar';

const BarcodeDigit = (props) => {
    return (
        <BarcodeDigitContainer>
            {props.colorCombinations[props.digit].map((color, index) => {
                let currentColor = props.colorCombinations[props.digit][index];
                let currentStyle = { backgroundColor: currentColor };
                return <SingleBar 
                            currentColor={currentColor} 
                            currentStyle={currentStyle}
                            key={index}
                        />
            })}
        </BarcodeDigitContainer>
    );
};

export default BarcodeDigit;