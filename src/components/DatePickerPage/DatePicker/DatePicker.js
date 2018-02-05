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
            viewingMonth: "",
            selectedDate: null
        }
    }

    componentWillMount() {
        const defaultDate = this.setDefaultDate();
        const months = moment.months();
        console.log(months);

        this.setState({
            selectedDate: defaultDate
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
        console.log("Incremented")
    }
    decrementMonth = () => {
        console.log("Decremented")
    }

    // Increment Year
    // Decrement Year

    // CreateYear ? only be able to select a date from yesterday to one year from today or tomorrow.....
    

    render() {
        const weekdays = moment()._locale._weekdays;
        const weeksInMonth = moment(moment().endOf('month') - moment().startOf('month')).weeks()

        const test = moment()._locale;
        console.log(test);

        return (
            <DatePickerContainer>
                <MonthBanner incrementMonth={this.incrementMonth} decrementMonth={this.decrementMonth} />
                <DaysOfTheWeekBanner />
                <AllWeeks handleDateSelection={this.props.handleDateSelection}/>
            </DatePickerContainer>
        );
    }
}

export default DatePicker;