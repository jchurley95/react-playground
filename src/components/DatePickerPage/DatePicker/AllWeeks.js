import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { AllWeeksContainer } from './Styled/AllWeeks.styled';
import Week from './Week';


const AllWeeks = (props) => {
    const moment = extendMoment(Moment);
    const firstDayOfMonth = moment().month(props.viewingMonth).startOf('month');
    const lastDayOfMonth = moment().month(props.viewingMonth).endOf('month');
    console.log('lastDayOfMonth is: ', lastDayOfMonth)
    const lastDayOfMonthNumber = moment().month(props.viewingMonth).endOf('month').format('D');
    // console.log('lastDayOfMonthNumber is: ', lastDayOfMonthNumber)
    const numberOfDaysInMonth = lastDayOfMonthNumber;
    const monthRange = moment.range(firstDayOfMonth, lastDayOfMonth);
    // console.log('monthRange is: ', monthRange);
    const weeksInMonth = Array.from(monthRange.by('weeks'));
    let lastWeekOfMonthStartDate = weeksInMonth.slice(-1).toString();
    // console.log('lastWeekOfMonthStartDate is: ', lastWeekOfMonthStartDate)
    let lastWeekOfMonthEndDate = moment(lastWeekOfMonthStartDate).add(1, 'week')
    // console.log('lastWeekOfMonthEndDate is: ', lastWeekOfMonthEndDate);
    console.log('weeksInMonth is: ', weeksInMonth);
    var monthOfLastWeekOfMonthEndDate = moment(lastWeekOfMonthEndDate).month();
    console.log('monthOfLastWeekOfMonthEndDate: ', monthOfLastWeekOfMonthEndDate)
    var monthOfLastDayOfMonth = moment(lastDayOfMonth).month();
    var test = moment(lastWeekOfMonthEndDate).isBefore(lastDayOfMonth);
    console.log("test is: ", test);
    console.log('monthOfLastDayOfMonth: ', monthOfLastDayOfMonth)
    if ((lastWeekOfMonthEndDate !== lastDayOfMonth) && (moment(monthOfLastWeekOfMonthEndDate).isBefore(monthOfLastDayOfMonth))) {
        console.log("hit")
        // weeksInMonth.push()
    }
    // console.log('add 1 week is: ', moment(firstDayOfMonth).add(1, 'week'))

    return (
        <AllWeeksContainer>

            {
                weeksInMonth.map(week => {
                    var endOfWeek = moment(week).endOf('week');
                    var startOfWeek = moment(week).startOf('week');
                    var weekRange = moment.range(startOfWeek, endOfWeek);
                    // console.log('weekRange is: ', weekRange)
                    var daysInWeek = Array.from(weekRange.by('days'));
                    // console.log('daysInWeek is: ', daysInWeek);
                    return (
                        <Week 
                            key={week} 
                            week={week}
                            selectedDate={props.selectedDate}
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