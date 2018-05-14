import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Week from './Week';
import {
    getAllStartingDaysOfWeeksInViewingMonth,
    getDaysInActualMonth,
    getArrayOfDaysGivenFirstAndLastDayOnly,
    getDaysInViewingMonthBeforeFirstWeekOfActualMonth,
    getDaysInViewingMonthAfterLastWeekOfActualMonth,
    getWeekObjectsFromOnlyActualMonth,
    getWeekObjectsFromDaysInEntireViewingMonth
} from './Utils/DateSelectionUtils'
import {
    AllShownWeeksContainer
} from './Styled/StyledDatePicker.styled';

const AllShownWeeks = (props) => {
    const moment = extendMoment(Moment);
    var firstDayOfMonth = moment().month(props.viewingMonth).startOf('month');
    var lastDayOfMonth = moment().month(props.viewingMonth).endOf('month');
    var monthRange = moment.range(firstDayOfMonth, lastDayOfMonth);
    var startingDaysOfWeeksInMonth = Array.from(monthRange.by('weeks'));
    var daysToShowFromActualMonth = getDaysInActualMonth(props.viewingMonth);  
    console.log(daysToShowFromActualMonth)  
    var daysToShowFromPreviousMonth = getDaysInViewingMonthBeforeFirstWeekOfActualMonth(props.viewingMonth);
    var daysToShowFromNextMonth = getDaysInViewingMonthAfterLastWeekOfActualMonth(props.viewingMonth);
    var allDaysToShow = [];
    allDaysToShow = allDaysToShow.concat(daysToShowFromPreviousMonth);
    allDaysToShow = allDaysToShow.concat(daysToShowFromActualMonth);
    allDaysToShow = allDaysToShow.concat(daysToShowFromNextMonth);
    console.log(allDaysToShow)
    var weeksToShow = [];
    var currentWeek = {
        days: []
    };
    allDaysToShow.map((day, index) => {
        console.log(day)
        var currentDay = {
            dateAsMomentObject: day,
            disabled: false
        }
        currentWeek.days.push(day);
        if (currentWeek.days.length === 7) {
            weeksToShow.push(currentWeek);
            currentWeek = {
                days: []
            }
        }
    })
    console.log(weeksToShow)
    var weeksToShowFromActualMonthOnly = getWeekObjectsFromOnlyActualMonth(daysToShowFromActualMonth);
    // console.log(weeksToShowFromActualMonthOnly)
    // var weeksToShowFromEntireViewingMonth = getWeekObjectsFromDaysInEntireViewingMonth(props.viewingMonth, weeksToShowFromActualMonthOnly);
    return (
        <AllShownWeeksContainer>
            {
                weeksToShow.map((week, index) => {
                    return (
                        <Week 
                            key={index}
                            week={week}
                            handleDateSelection={props.handleDateSelection}
                        />
                    )
                })
            }
        </AllShownWeeksContainer>
    );
};

export default AllShownWeeks;