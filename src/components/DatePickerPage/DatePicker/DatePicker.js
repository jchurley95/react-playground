import React, { Component } from 'react';
import { DatePickerContainer } from './Styled/DatePicker.styled';
import MonthBanner from './MonthBanner';
import DaysOfTheWeekBanner from './DaysOfTheWeekBanner';
import AllWeeks from './AllWeeks';

class DatePicker extends Component {
    render() {
        return (
            <DatePickerContainer>
                <MonthBanner />
                <DaysOfTheWeekBanner />
                <AllWeeks />
            </DatePickerContainer>
        );
    }
}

export default DatePicker;