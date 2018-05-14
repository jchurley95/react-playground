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
    if (props.day.inActualMonth === false || props.day.isDisabled) {
        return (
            <DisabledDayContainer>
                <DayNumber>{props.day.dateAsMomentObject.format('D').toString()}</DayNumber>
            </DisabledDayContainer>
        )
    }
    if (moment(props.day.dateAsMomentObject).format('MM-DD-YYYY') === moment(props.selectedDate).format('MM-DD-YYYY')) {
        return (
            <SelectedDayContainer>
                <DayNumber>{props.day.dateAsMomentObject.format('D').toString()}</DayNumber>
            </SelectedDayContainer>
        )
    }
    else if (moment(props.day.dateAsMomentObject).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY')) {
        console.log("Hit")
        return (
            <TodayContainer
                onClick={() => props.handleDateSelection(props.day.dateAsMomentObject)}
            >
                <DayNumber>{props.day.dateAsMomentObject.format('D').toString()}</DayNumber>
            </TodayContainer>
        )
    }
    else {
        return (
            <DayContainer
                onClick={() => props.handleDateSelection(props.day.dateAsMomentObject)}
            >
                <DayNumber>{props.day.dateAsMomentObject.format('D').toString()}</DayNumber>
            </DayContainer>
        );
    }
    
};

export default Day;