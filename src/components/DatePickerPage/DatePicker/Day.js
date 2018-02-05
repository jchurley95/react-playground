import React from 'react';
import { DayContainer } from './Styled/Day.styled';


const Day = (props) => {
    return (
        <DayContainer onClick={props.handleDateSelection}>
            day
        </DayContainer>
    );
};

export default Day;