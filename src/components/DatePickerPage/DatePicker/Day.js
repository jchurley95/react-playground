import React from 'react';
import moment from 'moment';
import { DayContainer } from './Styled/Day.styled';


const Day = (props) => {
    var day = props.day;
    var dayNumber = moment(props.day).format('D');
    var dayAsString = props.day.toString();
    return (
        <DayContainer day={props.day} onClick={() => props.handleDateSelection(dayAsString)}>
            {dayNumber}
        </DayContainer>
    );
};

export default Day;