import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { AllWeeksContainer } from './Styled/AllWeeks.styled';
import Week from './Week';


const AllWeeks = (props) => {
    const moment = extendMoment(Moment);

    var calendarIndex = -1;
    const firstDayOfMonth = moment().month(props.viewingMonth).startOf('month');
    const firstDayOfMonthName = moment(firstDayOfMonth).format('ddd');
    const firstDayOfMonthNumber = moment(firstDayOfMonth).format('D');

    const lastDayOfMonth = moment().month(props.viewingMonth).endOf('month');
    const lastDayOfMonthName = moment().month(props.viewingMonth).endOf('month').format('ddd');
    const lastDayOfMonthNumber = moment().month(props.viewingMonth).endOf('month').format('D');

    const numberOfDaysInMonth = lastDayOfMonthNumber;
    const monthRange = moment.range(firstDayOfMonth, lastDayOfMonth);
    // for (let day of monthRange.by('day')) {
        
    // }
    const daysInMonth = Array.from(monthRange.by('day'));
    const weeksInMonth = Array.from(monthRange.by('weeks'));
    

// Need to start on the {firstDayOfMonthNumber} value in the weeks, on a {firstDayOfMonthName}, and within that day container display {firstDayOfMonthNumber}
// Need to know # of weeks to return ???
    // If month starts on a Saturday (example)
    // Number should probably bump up for # of weeks automatically
    // Return <Week /> 's until {numberOfDaysInMonth} is empty

    // Then, within first <Week /> of month,
        // If {lastDayOfMonthNumber} is not equal to the {calendarIndex} of the final <Day /> in the last <Week />
            // return end of previous month in empty spaces leading up to {firstDayOfMonthNumber}
    // Then, within last <Week /> of month, 
        // If {lastDayOfMonthNumber} is not equal to the {calendarIndex} of the first <Day /> in the first <Week />
            // return beginning of next month in empty spaces starting after {lastDayOfTheMonthNumber}

    return (
        <AllWeeksContainer>

            {
                weeksInMonth.map(week => {
                    calendarIndex++;
                    var endOfWeek = moment(week).endOf('week');
                    var startOfWeek = moment(week).startOf('week');
                    var weekRange = moment.range(startOfWeek, endOfWeek);
                    var daysInWeek = Array.from(weekRange.by('days'));
                    return (
                        <Week 
                            key={week} 
                            week={week}
                            calendaryIndex={calendarIndex}
                            startOfWeek={startOfWeek}
                            endOfWeek={endOfWeek}
                            daysInWeek={daysInWeek}
                            handleDateSelection={props.handleDateSelection}
                        />
                    )
                })
            }
            
        </AllWeeksContainer>
    );
};

export default AllWeeks;