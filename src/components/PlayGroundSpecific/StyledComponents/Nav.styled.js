import NavAndCompStructure from './NavAndCompStructure.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = NavAndCompStructure.extend`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 25%;
    border-right: 1px solid gray;
    text-align: left;
    border-top-right-radius: 30px;

    h3 {
        color: rgba(100,200,220,1);
    }
`
const ComponentLink = styled(Link)`
    color: gray;
    text-decoration: none;
    margin: 10px;
`

export {
    Nav,
    ComponentLink
} 