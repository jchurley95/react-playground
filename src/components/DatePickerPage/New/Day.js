import React from 'react';
import moment from 'moment';
import {
    DayContainer,
    DayNumber
} from './Styled/StyledDatePicker.styled';

const Day = (props) => {
    return (
        <DayContainer
            onClick={() => props.handleDateSelection(props.day)}
        >
            <DayNumber>{moment(props.day).format('D').toString()}</DayNumber>
        </DayContainer>
    );
};

export default Day;