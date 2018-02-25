import styled from 'styled-components';

const PanelContainer = styled.div`
    padding: 5px;
`
const Header = styled.div`
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgba(100,200,220,1);
    }
`
const Content = styled.div`
    border: 1px solid black;
    padding: 5px;
`

export {
    PanelContainer,
    Header,
    Content
}