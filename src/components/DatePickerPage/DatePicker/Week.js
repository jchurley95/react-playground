import React from 'react';
import moment from 'moment';
import { WeekContainer } from './Styled/Week.styled';
import Day from './Day';

const Week = (props) => {
    var daysInWeek = props.daysInWeek;

    return (
        <WeekContainer>
            {
                daysInWeek.map((day) => {
                    return (
                        <Day 
                            key={day} 
                            day={day} 
                            viewingMonth={props.viewingMonth}
                            handleDateSelection={props.handleDateSelection} 
                        />
                    )
                })
            }
        </WeekContainer>
    );
};

export default Week;