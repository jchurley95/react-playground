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
        const viewingMonth = moment(defaultDate).month();
        
        this.setState({
            selectedDate: defaultDate,
            viewingMonth: viewingMonth
        });
    }

    setDefaultDate = () => {
        if(this.props.defaultDate){
            console.log(this.props.defaultDate)
            return this.props.defaultDate;
        }
        else {
            return moment().toDate();
        }
    }
    
    // SetMinDate
        // props.minDate
    // SetMaxDate
        // props.maxDate

    incrementMonth = () => {
        var currentMonth = this.state.viewingMonth;
        var nextMonth = currentMonth + 1; 
        this.setState({
            viewingMonth: nextMonth
        })
    }
    decrementMonth = () => {
        var currentMonth = this.state.viewingMonth;
        var previousMonth = currentMonth - 1; 
        this.setState({
            viewingMonth: previousMonth
        })
    }

    // Increment Year
    // Decrement Year

    render() {
        const viewingMonth = this.state.viewingMonth;
        const selectedDate = this.props.selectedDate;
        
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