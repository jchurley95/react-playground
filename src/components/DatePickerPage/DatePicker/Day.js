import React from 'react';
import moment from 'moment';
import { DayContainer, SelectedDayContainer } from './Styled/Day.styled';


const Day = (props) => {
    var day = props.day;
    var selectedDate = moment(props.selectedDate);
    var formattedDay = moment(day).format("MM-DD-YYYY");
    var formattedSelectedDate = moment(selectedDate).format("MM-DD-YYYY");
    var dayNumber = moment(props.day).format('D');
    var dayAsString = props.day.toString();
    var viewingMonth = props.viewingMonth;
    var monthThisDayBelongsTo = moment(props.day).month();
    var belongsToViewingMonth = monthThisDayBelongsTo === viewingMonth;
    var isSelectedDate = formattedDay === formattedSelectedDate;

    if (belongsToViewingMonth && !isSelectedDate) {
        return (
            <DayContainer 
                day={props.day} 
                onClick={() => props.handleDateSelection(dayAsString)}
            >
                {dayNumber}
            </DayContainer>
        );
    }
    else if (isSelectedDate) {
        return (
            <SelectedDayContainer 
                day={props.day} 
                selected
            >
                {dayNumber}
            </SelectedDayContainer>
        );
    }
    else {
        return (
            <DayContainer 
                day={props.day} 
                disabled
            >
                {dayNumber}
            </DayContainer>
        );
    }
    
};

export default Day;