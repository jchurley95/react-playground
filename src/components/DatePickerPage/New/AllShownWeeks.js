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
    var daysToShowFromPreviousMonth = getDaysInViewingMonthBeforeFirstWeekOfActualMonth(props.viewingMonth);
    var daysToShowFromNextMonth = getDaysInViewingMonthAfterLastWeekOfActualMonth(props.viewingMonth);
    var allDaysToShow = [];
    allDaysToShow = allDaysToShow.concat(daysToShowFromPreviousMonth);
    allDaysToShow = allDaysToShow.concat(daysToShowFromActualMonth);
    allDaysToShow = allDaysToShow.concat(daysToShowFromNextMonth);
    var weeksToShowFromActualMonthOnly = getWeekObjectsFromOnlyActualMonth(daysToShowFromActualMonth);
    var weeksToShowFromEntireViewingMonth = getWeekObjectsFromDaysInEntireViewingMonth(weeksToShowFromActualMonthOnly);
    return (
        <AllShownWeeksContainer>
            
        </AllShownWeeksContainer>
    );
};

export default AllShownWeeks;