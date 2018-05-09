import styled from 'styled-components';
import { DayAndName } from './Common.styled';

const DayOfTheWeekContainer = DayAndName.extend`
    text-align: center;
    padding: 5px;
    margin: 2px;
`

const DaysOfTheWeekBannerContainer = styled.div`
    display: flex;
    text-align: center;
`

export {
    DayOfTheWeekContainer,
    DaysOfTheWeekBannerContainer
}