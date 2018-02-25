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
    var target = event.target;
    var name = target.name;

    console.log(event, target, name)
  }

  render() {
    return (
      <BarcodePageContainer>
        <h3>Barcode Generator</h3>
        <div>Number being converted: {this.state.numberToConvert}</div>
        <input type="text" onChange={this.handleInputChange}/>

        <Barcode numberToConvert={this.state.numberToConvert} />
      </BarcodePageContainer>
    );
  }
}

export default BarcodePage