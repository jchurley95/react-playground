import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import FullBarcode from './components/FullBarcode';
const FullBarcodeStyled = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 500px;
  height: 190px;
  border: 1px solid black;
  display: flex;
`;
const BarcodeDigitStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const IndividualColorStyled = styled.div`
  height: 100%;
  width: 100%;
`;
class App extends Component {
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
      },
      numberToConvert: "0123456789123"
    }
  }
  componentWillMount () {
    console.log(this.state.barcodeDigitColorCombinations[0][0]);
  }
  render() {
    var colorCombinations = this.state.barcodeDigitColorCombinations
    console.log('colorCombinations is:', colorCombinations);
    console.log('colorCombinations[0] is:', colorCombinations[0]);
    console.log('colorCombinations[0][0] is:', colorCombinations[0][0]);
    var numberAsArray = this.state.numberToConvert.split("");
    console.log('numberAsArray is:', numberAsArray);
    console.log('numberAsArray[0] is:', numberAsArray[0]);
    return (
      <div className="App">
        {/* <header className="App-header">
          BARCODE.R
        </header> */}
        <FullBarcodeStyled className="Full-barcode">
          {numberAsArray.map((digit) => {
            console.log('Current digit is:', digit);
            return (
              <BarcodeDigitStyled className="Barcode-digit">
                {colorCombinations[digit].map((color, index) => {
                  console.log('Current color is:', color);
                  let currentColor = colorCombinations[digit][index];
                  let currentStyle = {backgroundColor: currentColor};
                  return (
                    <IndividualColorStyled style={currentStyle}>
                      
                    </IndividualColorStyled>
                  )
                })}
              </BarcodeDigitStyled>
            )
          })}
        </FullBarcodeStyled>
      </div>
    );
  }
}
{/* <FullBarcode numberToConvert={number}/> */}
export default