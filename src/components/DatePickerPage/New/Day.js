import React from 'react';
import moment from 'moment';
import {
    DayContainer,
    SelectedDayContainer,
    DisabledDayContainer,
    TodayContainer,
    DayNumber
} from './Styled/StyledDatePicker.styled';

const Day = (props) => {
    if (props.day === props.selectedDay) {
        console.log("hit")
    }
    return (
        <DayContainer
            onClick={() => props.handleDateSelection(props.day)}
        >
            <DayNumber>{moment(props.day).format('D').toString()}</DayNumber>
        </DayContainer>
    );
};

export default Day;