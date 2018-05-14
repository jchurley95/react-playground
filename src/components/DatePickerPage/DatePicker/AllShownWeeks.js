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
    var daysToShowFromActualMonth = getDaysInActualMonth(props.viewingMonth);  
    var daysToShowFromPreviousMonth = getDaysInViewingMonthBeforeFirstWeekOfActualMonth(props.viewingMonth);
    var daysToShowFromNextMonth = getDaysInViewingMonthAfterLastWeekOfActualMonth(props.viewingMonth);
    var allDaysToShow = [];
    allDaysToShow = allDaysToShow.concat(daysToShowFromPreviousMonth);
    allDaysToShow = allDaysToShow.concat(daysToShowFromActualMonth);
    allDaysToShow = allDaysToShow.concat(daysToShowFromNextMonth);
    var weeksToShow = [];
    var currentWeek = {
        days: []
    };
    allDaysToShow.map((day, index) => {
        var isCurrentMonth = true;
        var isDisabled = false;
        if (Math.abs(props.viewingMonth) % 12 !== day.month() && props.viewingMonth > 0) {
            isCurrentMonth = false;
        }
        if (props.viewingMonth < 0) {
            var viewingMonthMod12 = Math.abs(props.viewingMonth) % 12
            var correctMonthIndex;
            switch (viewingMonthMod12) { // because the days are now going negative
                case 12:
                    correctMonthIndex = 0;
                    break;
                case 11:
                    correctMonthIndex = 1;
                    break;
                case 10:
                    correctMonthIndex = 2;
                    break;
                case 9:
                    correctMonthIndex = 3;
                    break;
                case 8:
                    correctMonthIndex = 4;
                    break;
                case 7:
                    correctMonthIndex = 5;
                    break;
                case 6:
                    correctMonthIndex = 6;
                    break;
                case 5:
                    correctMonthIndex = 7;
                    break;
                case 4:
                    correctMonthIndex = 8;
                    break;
                case 3:
                    correctMonthIndex = 9;
                    break;
                case 2:
                    correctMonthIndex = 10;
                    break;
                case 1:
                    correctMonthIndex = 11;
                    break;
                case 0:
                    correctMonthIndex = 0;
                    break;
            }
            if (day.month() !== correctMonthIndex) {
                isCurrentMonth = false;
            }
        }
        // if day is less than minDate
        if (moment.max(day, props.minDate) !== day && day !== props.minDate) {
            isDisabled = true;
        }
        // if day is greater than maxDate
        if (moment.min(day, props.maxDate) !== day && day !== props.maxDate) {
            isDisabled = true;
        }
        // if day meets disable crieria
        var currentDay = {
            dateAsMomentObject: day,
            isDisabled: isDisabled,
            inActualMonth: isCurrentMonth
        }
        currentWeek.days.push(currentDay);
        if (currentWeek.days.length === 7) {
            weeksToShow.push(currentWeek);
            currentWeek = {
                days: []
            }
        }
    })
    return (
        <AllShownWeeksContainer>
            {
                weeksToShow.map((week, index) => {
                    return (
                        <Week 
                            key={index}
                            week={week}
                            handleDateSelection={props.handleDateSelection}
                            selectedDate={props.selectedDate}
                        />
                    )
                })
            }
        </AllShownWeeksContainer>
    );
};

export default AllShownWeeks;