import React from 'react';
import moment from 'moment';
import { WeekContainer } from './Styled/Week.styled';
import Day from './Day';

const Week = (props) => {
    let weekdays = moment()._locale._weekdays;
    var daysInWeek = props.daysInWeek;

    return (
        <WeekContainer>
            {
                daysInWeek.map((day) => {
                    return (
                        <Day key={day} day={day} handleDateSelection={props.handleDateSelection} />
                    )
                })
            }
        </WeekContainer>
    );
};

export default Week;