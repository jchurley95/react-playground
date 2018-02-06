import React, { Component } from 'react';
import { DatePickerContainer } from './Styled/DatePicker.styled';
import MonthBanner from './MonthBanner';
import DaysOfTheWeekBanner from './DaysOfTheWeekBanner';
import AllWeeks from './AllWeeks';
import moment from 'moment';

class DatePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDate: null,
            viewingMonth: null
        }
    }

    componentWillMount() {
        const defaultDate = this.setDefaultDate();
        const viewingMonth = parseInt(moment(defaultDate).format('dddd, M').toString().split(" ").slice(1).toString());
        console.log(viewingMonth);
        this.setState({
            selectedDate: defaultDate,
            viewingMonth: viewingMonth
        });
    }

    // Show
        // props.shown
    // Hide
        // props.shown

    // handleDateSelection = (event) => {
    //     //moment([year, month, day])
    //     var year = "";
    //     var month = "";
    //     var day = event.target.value;
    //     var date = new Date(year, month, day);
    //     this.setState({selectedDate: date});
    // }
        // setState or this.selectedDate?

    setDefaultDate = () => {
        if(this.props.defaultDate){
            return this.props.defaultDate;
        }
        else {
            return moment().toDate();
        }
    }
        // props.defaultDate
    // SetMinDate
        // props.minDate
    // SetMaxDate
        // props.maxDate

    incrementMonth = () => {
        var currentMonth = this.state.viewingMonth;
        var nextMonth = currentMonth + 1; 
        console.log('nextMonth is: ', nextMonth);
        this.setState({
            viewingMonth: nextMonth
        })
    }
    decrementMonth = () => {
        var currentMonth = this.state.viewingMonth;
        var previousMonth = currentMonth - 1; 
        console.log('previousMonth is: ', previousMonth);
        this.setState({
            viewingMonth: previousMonth
        })
    }

    // Increment Year
    // Decrement Year

    createMonth = (month, year) => {
        var startDate = moment(year + '-' + month + '-' + "01");
        var endDate = startDate.clone().endOf('month')

        return {
            monthStartDate: startDate.toDate(),
            monthEndDate: endDate.toDate()
        }
    }

    // CreateYear ? only be able to select a date from yesterday to one year from today or tomorrow.....
    createYear = () => {
        var weekdays = moment()._locale._weekdays;
        var currentDay = moment().day();
        var currentDate = moment().date();
        var currentYear = moment().year();
        var currentMonth = moment().month();
    }

    render() {
        const weekdays = moment()._locale._weekdays;
        const weeksInMonth = moment(moment().endOf('month') - moment().startOf('month')).weeks();
        var startOfCurrentMonth = moment().startOf('month')._d.toString().split(" ").slice(0, 4).reverse();
        var endOfCurrentMonth = moment().endOf('month')._d.toString().split(" ").slice(0, 4).reverse();
        const viewingMonth = this.state.viewingMonth;
        const selectedDate = this.state.selectedDate;
        // .month(9).date(42).format('YYYY-MM-DD');
        const lastOfMonth = moment().month(viewingMonth).endOf('month');
        console.log(lastOfMonth);
        console.log(viewingMonth)

        return (
            <DatePickerContainer>
                <MonthBanner viewingMonth={viewingMonth} incrementMonth={this.incrementMonth} decrementMonth={this.decrementMonth} />
                <DaysOfTheWeekBanner />
                <AllWeeks viewingMonth={viewingMonth} selectedDate={selectedDate} handleDateSelection={this.props.handleDateSelection}/>
            </DatePickerContainer>
        );
    }
}

export default DatePicker;