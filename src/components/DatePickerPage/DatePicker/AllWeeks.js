import React from 'react';
import moment from 'moment';
import { AllWeeksContainer } from './Styled/AllWeeks.styled';
import Week from './Week';

const AllWeeks = (props) => {
    const firstDayOfMonthName = moment().month(props.viewingMonth).format('ddd');
    const firstDayOfMonthNumber = moment().month(props.viewingMonth).format('D');
    console.log("first day name: ", firstDayOfMonthName);
    console.log("first day number: ", firstDayOfMonthNumber);
// Need to start on the {firstDayOfMonthNumber} value in the weeks, on a {firstDayOfMonthName}, and within that day container display {firstDayOfMonthNumber}
    return (
        <AllWeeksContainer>
            
            <Week handleDateSelection={props.handleDateSelection}/>
            <Week handleDateSelection={props.handleDateSelection}/>
            <Week handleDateSelection={props.handleDateSelection}/>
            <Week handleDateSelection={props.handleDateSelection}/>
            
        </AllWeeksContainer>
    );
};

export default AllWeeks;