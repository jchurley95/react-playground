import React, { Component } from 'react';
import styled from 'styled-components';
import Barcode from './Barcode/Barcode';

const BarcodePageContainer = styled.div`
  padding: 20px;
`;

class BarcodePage extends Component {
  constructor() {
    super();
    this.state = {
      numberToConvert: "0123456789123"
    }
  }

  handleInputChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    var newState = {...this.state}
    newState[name] = value;
    this.setState(newState)
    console.log(this.state)
  }

  render() {
    return (
      <BarcodePageContainer>
        <h3>Barcode Generator</h3>
        <div>Number being converted: {this.state.numberToConvert}</div>
          <input 
            type="text" 
            onChange={this.handleInputChange}
            name="numberToConvert"
            placeholder={this.state.numberToConvert}
          />

        <Barcode numberToConvert={this.state.numberToConvert} />
      </BarcodePageContainer>
    );
  }
}

export default BarcodePage