import styled from 'styled-components'

const FullBarcodeContainer = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    width: 500px;
    height: 190px;
    border: 1px solid black;
    display: flex;
`;

const GuardBarsContainer = styled.div`
    
`

const BarcodeDigitContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const SingleBarContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export {
    FullBarcodeContainer,
    BarcodeDigitContainer,
    GuardBarsContainer,
    SingleBarContainer
}