import React from 'react';
import Day from './Day';
import {
    WeekContainer
} from './Styled/StyledDatePicker.styled';

const Week = (props) => {
    return (
        <WeekContainer>
            {
                props.week.days.map((day, index) => {
                    return (
                        <Day
                            key={index}
                            day={day}
                            handleDateSelection={props.handleDateSelection}
                            selectedDate={props.selectedDate}
                        />
                    )
                })
            }
        </WeekContainer>
    );
};

export default Week;