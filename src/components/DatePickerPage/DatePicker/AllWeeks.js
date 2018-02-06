import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { AllWeeksContainer } from './Styled/AllWeeks.styled';
import Week from './Week';


const AllWeeks = (props) => {
    const moment = extendMoment(Moment);
    const firstDayOfMonth = moment().month(props.viewingMonth).startOf('month');
    const lastDayOfMonth = moment().month(props.viewingMonth).endOf('month');
    const lastDayOfMonthNumber = moment().month(props.viewingMonth).endOf('month').format('D');
    const numberOfDaysInMonth = lastDayOfMonthNumber;
    const monthRange = moment.range(firstDayOfMonth, lastDayOfMonth);
    const weeksInMonth = Array.from(monthRange.by('weeks'));

    return (
        <AllWeeksContainer>

            {
                weeksInMonth.map(week => {
                    var endOfWeek = moment(week).endOf('week');
                    var startOfWeek = moment(week).startOf('week');
                    var weekRange = moment.range(startOfWeek, endOfWeek);
                    var daysInWeek = Array.from(weekRange.by('days'));
                    return (
                        <Week 
                            key={week} 
                            week={week}
                            startOfWeek={startOfWeek}
                            endOfWeek={endOfWeek}
                            daysInWeek={daysInWeek}
                            viewingMonth={props.viewingMonth}
                            handleDateSelection={props.handleDateSelection}
                        />
                    )
                })
            }
            
        </AllWeeksContainer>
    );
};

export default AllWeeks;