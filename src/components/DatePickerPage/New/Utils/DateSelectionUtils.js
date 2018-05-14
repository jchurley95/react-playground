import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

var getAllStartingDaysOfWeeksInViewingMonth = (viewingMonth) => {
    var firstDayOfMonth = moment().month(viewingMonth).startOf('month');
    var lastDayOfMonth = moment().month(viewingMonth).endOf('month');
    var monthRange = moment.range(firstDayOfMonth, lastDayOfMonth);
    var startingDaysOfWeeksInMonth = Array.from(monthRange.by('weeks'));
    return startingDaysOfWeeksInMonth;
}

var getDaysInActualMonth = (viewingMonth) => {
    var actualMonth = moment().month(viewingMonth);
    var numberOfDaysInMonth = moment(actualMonth).daysInMonth();
    var daysInActualMonth = [];

    while (numberOfDaysInMonth) {
        var currentDay = moment(actualMonth).date(numberOfDaysInMonth);
        daysInActualMonth.push(currentDay);
        numberOfDaysInMonth--;
    }
    daysInActualMonth = daysInActualMonth.reverse();

    return daysInActualMonth;
}

var getArrayOfDaysGivenFirstAndLastDayOnly = (firstDay, lastDay) => {
    var arrayOfDays = [];
    var rangeOfDays = moment.range(firstDay, lastDay);
    var numberOfDaysBetweenThem = rangeOfDays.end.date() - rangeOfDays.start.date();
    while (numberOfDaysBetweenThem) {
        var currentDay = moment(rangeOfDays.end).subtract(numberOfDaysBetweenThem, 'days');
        arrayOfDays.push(currentDay);
        numberOfDaysBetweenThem--;
    }
    arrayOfDays.push(rangeOfDays.end);
    return arrayOfDays;
}

var getDaysInViewingMonthBeforeFirstWeekOfActualMonth = (viewingMonth) => {
    var daysToShowFromBeforeActualMonth = [];   

    var firstDayOfActualMonth = moment().month(viewingMonth).startOf('month');
    if (moment(firstDayOfActualMonth).isoWeekday() !== 0) { // if the first day of the month isn't a Sunday
        var numberOfDaysToShowFromBeforeActualMonth = getNumberOfDaysToShowFromBeforeActualMonth(firstDayOfActualMonth);
        var lastDayOfLastMonth = moment().month(viewingMonth - 1).endOf('month');
        var firstDayOfDaysToShowFromBeforeActualMonth = moment(lastDayOfLastMonth).subtract(numberOfDaysToShowFromBeforeActualMonth, 'days');
        firstDayOfDaysToShowFromBeforeActualMonth = moment(firstDayOfDaysToShowFromBeforeActualMonth);
        daysToShowFromBeforeActualMonth = getArrayOfDaysGivenFirstAndLastDayOnly(firstDayOfDaysToShowFromBeforeActualMonth, lastDayOfLastMonth);
    }
    if (daysToShowFromBeforeActualMonth.length >= 7) {
        daysToShowFromBeforeActualMonth = [];
    }
    return daysToShowFromBeforeActualMonth;
}

var getDaysInViewingMonthAfterLastWeekOfActualMonth = (viewingMonth) => {
    var daysToShowFromAfterActualMonth = [];
    
    var lastDayOfActualMonth = moment().month(viewingMonth).endOf('month');
    if (moment(lastDayOfActualMonth).isoWeekday() !== 6) { // if the last day of the month isn't a Saturday
        var numberOfDaysToShowFromAfterActualMonth = getNumberOfDaysToShowFromAfterActualMonth(lastDayOfActualMonth);
        var firstDayOfNextMonth = moment().month(viewingMonth + 1).startOf('month');
        var lastDayOfDaysToShowFromAfterActualMonth = moment(firstDayOfNextMonth).add(numberOfDaysToShowFromAfterActualMonth, 'days');
        lastDayOfDaysToShowFromAfterActualMonth = moment(lastDayOfDaysToShowFromAfterActualMonth);
        daysToShowFromAfterActualMonth = getArrayOfDaysGivenFirstAndLastDayOnly(firstDayOfNextMonth, lastDayOfDaysToShowFromAfterActualMonth);
    } 
    if (daysToShowFromAfterActualMonth.length >= 7) {
        daysToShowFromAfterActualMonth = [];
    }
    return daysToShowFromAfterActualMonth;
}

var getNumberOfDaysToShowFromBeforeActualMonth = (firstDayOfActualMonth) => {
    var numberOfDaysToShow = 0;
    var dayNumberInWeek = moment(firstDayOfActualMonth).isoWeekday();
    if (dayNumberInWeek !== 0) {
        numberOfDaysToShow = dayNumberInWeek - 1;
    }
    return numberOfDaysToShow;
}

var getNumberOfDaysToShowFromAfterActualMonth = (lastDayOfActualMonth) => {
    var numberOfDaysToShow = 0;
    var dayNumberInWeek = moment(lastDayOfActualMonth).isoWeekday();
    if (dayNumberInWeek !== 6) {
        numberOfDaysToShow = 6 - dayNumberInWeek - 1;
    }
    return numberOfDaysToShow;
}

var getEmptyDaySpacesForPreviousMonth = (firstDayOfActualMonth) => {
    var emptyDaySpaces = [];
    var numberOfDaysFromPreviousMonth = getNumberOfDaysToShowFromBeforeActualMonth(firstDayOfActualMonth);
    console.log(numberOfDaysFromPreviousMonth) // here
    while (numberOfDaysFromPreviousMonth) {
        var emptyDay = {
            momentObjectOfDay: null,
            inActualMonth: false,
            indexInActualMonth: null
        }
        emptyDaySpaces.push(emptyDay);
        numberOfDaysFromPreviousMonth--;
        console.log(emptyDay)
    }
    console.log(emptyDaySpaces)
    return emptyDaySpaces;
}
var getEmptyDaySpacesForNextMonth = (lastDayOfActualMonth) => {
    var emptyDaySpaces = [];
    var numberOfDaysFromNextMonth = getNumberOfDaysToShowFromAfterActualMonth(lastDayOfActualMonth);
    // console.log(numberOfDaysFromNextMonth)
    while (numberOfDaysFromNextMonth) {
        var emptyDay = {
            momentObjectOfDay: null,
            inActualMonth: false,
            indexInActualMonth: null
        }
        emptyDaySpaces.push(emptyDay);
        numberOfDaysFromNextMonth--;
    }
    // console.log(emptyDaySpaces)
    return emptyDaySpaces;
}

var getWeekObjectsFromOnlyActualMonth = (daysInActualMonth) => {
    var weeksToShowFromActualMonthOnly = [];
    var currentWeek = [];
    daysInActualMonth.map((day, index) => {
        if (index === 0) {
            var emptyDaySpacesForPreviousMonth = getEmptyDaySpacesForPreviousMonth(daysInActualMonth[0]);
            currentWeek = emptyDaySpacesForPreviousMonth;
            // console.log(currentWeek)
        // console.log(emptyDaySpacesForPreviousMonth)
            
        }
        else if (currentWeek.length !== 7) {
            var currentDay = {
                momentObjectOfDay: day,
                inActualMonth: true,
                indexInActualMonth: index
            }
            currentWeek.push(currentDay);
        }
        else if (currentWeek.length === 7 && index !== daysInActualMonth.length - 1) {
            weeksToShowFromActualMonthOnly.push(currentWeek); // add current week to list of weeks to be displayed
            currentWeek = []; // clear the currentWeek for the next week
            var firstDayOfWeek = {
                momentObjectOfDay: day,
                inActualMonth: true,
                indexInActualMonth: index
            }
            currentWeek.push(firstDayOfWeek);
        }
        else if (index === daysInActualMonth.length - 1 && moment(daysInActualMonth[index]).isoWeekday() !== 6) { // last day of actual month is not a Saturday, need empty days until Saturday
            var emptyDaySpacesForNextMonth = getEmptyDaySpacesForNextMonth(daysInActualMonth[index]);
            currentWeek.concat(emptyDaySpacesForNextMonth);
            weeksToShowFromActualMonthOnly.push(currentWeek);
        }
        else if (index === daysInActualMonth.length - 1 && moment(daysInActualMonth[index]).isoWeekday() === 6) { // last day of month is a Saturday, no need for empty days
            weeksToShowFromActualMonthOnly.push(currentWeek);
        }
    })
    return weeksToShowFromActualMonthOnly;
}

var getWeekObjectsFromDaysInEntireViewingMonth = (viewingMonth, weeksToShowFromActualMonthOnly) => {
    var weeksToShowFromEntireViewingMonth = [];

    var daysToShowFromBeforeActualMonth = getDaysInViewingMonthBeforeFirstWeekOfActualMonth(viewingMonth);
    daysToShowFromBeforeActualMonth.map((day, index) => {
        var currentDay = {
            momentObjectOfDay: day,
            inActualMonth: false,
            indexInPreviousMonth: index
        }
        weeksToShowFromActualMonthOnly[0].splice(index, 1, currentDay)
    })

    // var daysToShowFromAfterActualMonth = getDaysInViewingMonthAfterLastWeekOfActualMonth(viewingMonth);
    // daysToShowFromAfterActualMonth.map((day, index) => {
    //     var currentDay = {
    //         momentObjectOfDay: day,
    //         inActualMonth: false,
    //         indexInNextMonth: index
    //     }
    //     var week = weeksToShowFromActualMonthOnly[weeksToShowFromActualMonthOnly.length - 1];
    //     var weekReversed = week.reverse();
    //     weekReversed = weekReversed.splice(index, 1, currentDay);
    //     week = weekReversed.reverse();
    //     weeksToShowFromActualMonthOnly[weeksToShowFromActualMonthOnly.length - 1] = week;
    // })
    weeksToShowFromEntireViewingMonth = weeksToShowFromActualMonthOnly;
    return weeksToShowFromEntireViewingMonth;
}




export {
    getAllStartingDaysOfWeeksInViewingMonth,
    getDaysInActualMonth,
    getArrayOfDaysGivenFirstAndLastDayOnly,
    getDaysInViewingMonthBeforeFirstWeekOfActualMonth,
    getDaysInViewingMonthAfterLastWeekOfActualMonth,
    getNumberOfDaysToShowFromBeforeActualMonth,
    getNumberOfDaysToShowFromAfterActualMonth,
    getEmptyDaySpacesForPreviousMonth,
    getWeekObjectsFromOnlyActualMonth,
    getWeekObjectsFromDaysInEntireViewingMonth
}