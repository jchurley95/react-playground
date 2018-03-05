import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPageContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`
const ComponentLink = styled(Link)`
    color: gray;
    text-decoration: none;
    margin: 10px;
`

export {
    LandingPageContainer,
    ComponentLink
}