import React, { Component } from 'react';
import styled from 'styled-components';
import Barcode from './Barcode/Barcode';

const BarcodePageContainer = styled.div`
  margin: 20px;
`;

class BarcodePage extends Component {
  constructor() {
    super();
    this.state = {
      numberToConvert: "0123456789123"
    }
  }

  render() {
    return (
      <BarcodePageContainer>
        <div>Number being converted: {this.state.numberToConvert}</div>
        <Barcode numberToConvert={this.state.numberToConvert} />
      </BarcodePageContainer>
    );
  }
}

export default BarcodePage