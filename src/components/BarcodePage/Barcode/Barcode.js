import React, { Component } from 'react';
import BarcodeDigit from './BarcodeDigit';
import {
    FullBarcodeContainer
} from './Styled/Barcode.styled';

class Barcode extends Component {
    constructor(props) {
        super(props);
        
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
        var numberAsArray = this.props.numberToConvert.split("");
        
        return (
            <FullBarcodeContainer>
                {numberAsArray.map((digit, index) => {
                    return <BarcodeDigit 
                                colorCombinations={colorCombinations} 
                                digit={digit}
                                key={index}
                            />
                })}
            </FullBarcodeContainer>
        );
    }
}

export default Barcode;