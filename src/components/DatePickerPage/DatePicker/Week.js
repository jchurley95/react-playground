import React from 'react';
import moment from 'moment';
import { WeekContainer } from './Styled/Week.styled';
import Day from './Day';

const Week = (props) => {
    let weekdays = moment()._locale._weekdays;

    return (
        <WeekContainer>
            {
                weekdays.map((weekday) => {
                    return (
                        <Day key={weekday} handleDateSelection={props.handleDateSelection} />
                    )
                })
            }
        </WeekContainer>
    );
};

export default Week;