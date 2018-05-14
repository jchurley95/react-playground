import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const getAllStartingDaysOfWeeksInViewingMonth = (viewingMonth) => {
    let firstDayOfMonth = moment().month(viewingMonth).startOf('month');
    let lastDayOfMonth = moment().month(viewingMonth).endOf('month');
    let monthRange = moment.range(firstDayOfMonth, lastDayOfMonth);
    let startingDaysOfWeeksInMonth = Array.from(monthRange.by('weeks'));
    return startingDaysOfWeeksInMonth;
}

const getDaysInActualMonth = (viewingMonth) => {
    let actualMonth = moment().month(viewingMonth);
    let numberOfDaysInMonth = moment(actualMonth).daysInMonth();
    let daysInActualMonth = [];

    while (numberOfDaysInMonth) {
        let currentDay = moment(actualMonth).date(numberOfDaysInMonth);
        daysInActualMonth.push(currentDay);
        numberOfDaysInMonth--;
    }
    daysInActualMonth = daysInActualMonth.reverse();

    return daysInActualMonth;
}

const getArrayOfDaysGivenFirstAndLastDayOnly = (firstDay, lastDay) => {
    let arrayOfDays = [];
    let rangeOfDays = moment.range(firstDay, lastDay);
    let numberOfDaysBetweenThem = rangeOfDays.end.date() - rangeOfDays.start.date();
    while (numberOfDaysBetweenThem) {
        let currentDay = moment(rangeOfDays.end).subtract(numberOfDaysBetweenThem, 'days');
        arrayOfDays.push(currentDay);
        numberOfDaysBetweenThem--;
    }
    arrayOfDays.push(rangeOfDays.end);
    return arrayOfDays;
}

const getDaysInViewingMonthBeforeFirstWeekOfActualMonth = (viewingMonth) => {
    let daysToShowFromBeforeActualMonth = [];   

    let firstDayOfActualMonth = moment().month(viewingMonth).startOf('month');
    if (moment(firstDayOfActualMonth).isoWeekday() !== 0) { // if the first day of the month isn't a Sunday
        let numberOfDaysToShowFromBeforeActualMonth = getNumberOfDaysToShowFromBeforeActualMonth(firstDayOfActualMonth);
        let lastDayOfLastMonth = moment().month(viewingMonth - 1).endOf('month');
        let firstDayOfDaysToShowFromBeforeActualMonth = moment(lastDayOfLastMonth).subtract(numberOfDaysToShowFromBeforeActualMonth, 'days');
        firstDayOfDaysToShowFromBeforeActualMonth = moment(firstDayOfDaysToShowFromBeforeActualMonth);
        daysToShowFromBeforeActualMonth = getArrayOfDaysGivenFirstAndLastDayOnly(firstDayOfDaysToShowFromBeforeActualMonth, lastDayOfLastMonth);
    }
    if (daysToShowFromBeforeActualMonth.length >= 7) {
        daysToShowFromBeforeActualMonth = [];
    }
    return daysToShowFromBeforeActualMonth;
}

const getDaysInViewingMonthAfterLastWeekOfActualMonth = (viewingMonth) => {
    let daysToShowFromAfterActualMonth = [];
    
    let lastDayOfActualMonth = moment().month(viewingMonth).endOf('month');
    if (moment(lastDayOfActualMonth).isoWeekday() !== 6) { // if the last day of the month isn't a Saturday
        let numberOfDaysToShowFromAfterActualMonth = getNumberOfDaysToShowFromAfterActualMonth(lastDayOfActualMonth);
        let firstDayOfNextMonth = moment().month(viewingMonth + 1).startOf('month');
        let lastDayOfDaysToShowFromAfterActualMonth = moment(firstDayOfNextMonth).add(numberOfDaysToShowFromAfterActualMonth, 'days');
        lastDayOfDaysToShowFromAfterActualMonth = moment(lastDayOfDaysToShowFromAfterActualMonth);
        daysToShowFromAfterActualMonth = getArrayOfDaysGivenFirstAndLastDayOnly(firstDayOfNextMonth, lastDayOfDaysToShowFromAfterActualMonth);
    } 
    if (daysToShowFromAfterActualMonth.length >= 7) {
        daysToShowFromAfterActualMonth = [];
    }
    return daysToShowFromAfterActualMonth;
}

const getNumberOfDaysToShowFromBeforeActualMonth = (firstDayOfActualMonth) => {
    let numberOfDaysToShow = 0;
    let dayNumberInWeek = moment(firstDayOfActualMonth).isoWeekday();
    if (dayNumberInWeek !== 0) {
        numberOfDaysToShow = dayNumberInWeek - 1;
    }
    console.log(numberOfDaysToShow);
    return numberOfDaysToShow;
}

const getNumberOfDaysToShowFromAfterActualMonth = (lastDayOfActualMonth) => {
    let numberOfDaysToShow = 0;
    let dayNumberInWeek = moment(lastDayOfActualMonth).isoWeekday();
    if (dayNumberInWeek !== 6) {
        numberOfDaysToShow = 6 - dayNumberInWeek - 1;
    }
    return numberOfDaysToShow;
}

const getEmptyDaySpacesForPreviousMonth = (firstDayOfActualMonth) => {
    let arrayOfEmptyDaySpaces = [];
    console.log(arrayOfEmptyDaySpaces)
    let numberOfDaysFromPreviousMonth = getNumberOfDaysToShowFromBeforeActualMonth(firstDayOfActualMonth);
    console.log(numberOfDaysFromPreviousMonth) // here
    while (numberOfDaysFromPreviousMonth) {
        let emptyDay = {
            momentObjectOfDay: null,
            inActualMonth: false,
            indexInActualMonth: null
        }
        arrayOfEmptyDaySpaces.push(emptyDay);
        numberOfDaysFromPreviousMonth--;
    }
    console.log(arrayOfEmptyDaySpaces)
    return arrayOfEmptyDaySpaces;
}
const getEmptyDaySpacesForNextMonth = (lastDayOfActualMonth) => {
    let emptyDaySpaces = [];
    let numberOfDaysFromNextMonth = getNumberOfDaysToShowFromAfterActualMonth(lastDayOfActualMonth);
    // console.log(numberOfDaysFromNextMonth)
    while (numberOfDaysFromNextMonth) {
        let emptyDay = {
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

const getWeekObjectsFromOnlyActualMonth = (daysInActualMonth) => {
    let weeksToShowFromActualMonthOnly = [];
    console.log(weeksToShowFromActualMonthOnly)
    let currentWeek = [];
    daysInActualMonth.map((day, index) => {
        if (index === 0) {
            let emptyDaySpacesForPreviousMonth = getEmptyDaySpacesForPreviousMonth(daysInActualMonth[0]);
            currentWeek = emptyDaySpacesForPreviousMonth;
            let currentDay = {
                momentObjectOfDay: day,
                inActualMonth: true,
                indexInActualMonth: index
            }
            currentWeek.push(currentDay);
            // console.log(currentWeek)
        // console.log(emptyDaySpacesForPreviousMonth)
            
        }
        else if (currentWeek.length !== 7) {
            let currentDay = {
                momentObjectOfDay: day,
                inActualMonth: true,
                indexInActualMonth: index
            }
            currentWeek.push(currentDay);
        }
        else if (currentWeek.length === 7 && index !== daysInActualMonth.length - 1) {
            weeksToShowFromActualMonthOnly.push(currentWeek); // add current week to list of weeks to be displayed
            currentWeek = []; // clear the currentWeek for the next week
            let firstDayOfWeek = {
                momentObjectOfDay: day,
                inActualMonth: true,
                indexInActualMonth: index
            }
            currentWeek.push(firstDayOfWeek);
        }
        else if (index === daysInActualMonth.length - 1 && moment(daysInActualMonth[index]).isoWeekday() !== 6) { // last day of actual month is not a Saturday, need empty days until Saturday
            let emptyDaySpacesForNextMonth = getEmptyDaySpacesForNextMonth(daysInActualMonth[index]);
            currentWeek.concat(emptyDaySpacesForNextMonth);
            weeksToShowFromActualMonthOnly.push(currentWeek);
        }
        else if (index === daysInActualMonth.length - 1 && moment(daysInActualMonth[index]).isoWeekday() === 6) { // last day of month is a Saturday, no need for empty days
            weeksToShowFromActualMonthOnly.push(currentWeek);
        }
    })
    return weeksToShowFromActualMonthOnly;
}

const getWeekObjectsFromDaysInEntireViewingMonth = (viewingMonth, weeksToShowFromActualMonthOnly) => {
    let weeksToShowFromEntireViewingMonth = [];

    let daysToShowFromBeforeActualMonth = getDaysInViewingMonthBeforeFirstWeekOfActualMonth(viewingMonth);
    daysToShowFromBeforeActualMonth.map((day, index) => {
        let currentDay = {
            momentObjectOfDay: day,
            inActualMonth: false,
            indexInPreviousMonth: index
        }
        weeksToShowFromActualMonthOnly[0].splice(index, 1, currentDay)
    })

    // const daysToShowFromAfterActualMonth = getDaysInViewingMonthAfterLastWeekOfActualMonth(viewingMonth);
    // daysToShowFromAfterActualMonth.map((day, index) => {
    //     const currentDay = {
    //         momentObjectOfDay: day,
    //         inActualMonth: false,
    //         indexInNextMonth: index
    //     }
    //     const week = weeksToShowFromActualMonthOnly[weeksToShowFromActualMonthOnly.length - 1];
    //     const weekReversed = week.reverse();
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