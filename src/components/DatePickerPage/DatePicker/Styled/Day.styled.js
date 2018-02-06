import styled from 'styled-components';
import { DayAndName } from './Common.styled';

const DayContainer = DayAndName.extend`
    text-align: center;
    padding: 5px;
    margin: 2px;
    height: 30px;
    width: 30px;
    border-radius: 360px;
    box-shadow: 1px 1px black;

    &:hover {
        background-color: rgba(225, 225, 225, 0.7);
    }
`

export {
    DayContainer
}