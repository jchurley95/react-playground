import React, { Component } from 'react';
import BarcodeDigit from './BarcodeDigit';
import {
    FullBarcodeContainer
} from './Styled/Barcode.styled';

class Barcode extends Component {
    constructor() {
        super();
        
        this.state = {
            barcodeDigitColorCombinations: {
                0: ['white', 'white', 'white', 'black', 'black', 'white', 'black'],
                1: ['white', 'white', 'black', 'black', 'white', 'white', 'black'],
                2: ['white', 'white', 'black', 'white', 'white', 'black', 'black'],
                3: ['white', 'black', 'black', 'black', 'black', 'white', 'black'],
                4: ['white', 'black', 'white', 'white', 'white', 'black', 'black'],
                5: ['white', 'black', 'black', 'white', 'white', 'white', 'black'],
                6: ['white', 'black', 'white', 'black', 'black', 'black', 'black'],
                7: ['white', 'black', 'black', 'black', 'white', 'black', 'black'],
                8: ['white', 'black', 'black', 'white', 'black', 'black', 'black'],
                9: ['white', 'white', 'white', 'black', 'white', 'black', 'black']
            }
        }
    }

    render() {
        var colorCombinations = this.state.barcodeDigitColorCombinations
        var numberAsArray = this.state.numberToConvert.split("");
        
        return (
            <FullBarcodeContainer className="Full-barcode">
                {numberAsArray.map((digit) => {
                    return <BarcodeDigit digit={digit}/>
                    
                    <BarcodeDigitContainer className="Barcode-digit">
                        {colorCombinations[digit].map((color, index) => {
                        let currentColor = colorCombinations[digit][index];
                        let currentStyle = {backgroundColor: currentColor};
                        return (
                            <IndividualColorStyled style={currentStyle}>
                            
                            </IndividualColorStyled>
                        )
                        })}
                    </BarcodeDigitContainer>
                })}
            </FullBarcodeContainer>
        );
    }
}

export default Barcode;