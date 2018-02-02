import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const ComponentLink = styled(Link)`
    color: gray;
    text-decoration: none;
`

export {
    LandingPageContainer,
    ComponentLink
}