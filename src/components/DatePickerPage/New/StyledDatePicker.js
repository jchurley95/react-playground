import React, { Component } from 'react';
import Header from './Header';
import DaysOfTheWeekBanner from './DaysOfTheWeekBanner';
import AllShownWeeks from './AllShownWeeks';
import moment from 'moment'
import {
    StyledDatePickerContainer
} from './Styled/StyledDatePicker.styled';

class StyledDatePicker extends Component {
    constructor() {
        super();

        this.state = {
            viewingMonth: null
        }
    }

    componentWillMount() {
        const defaultDate = this.getDefaultDate();
        const viewingMonth = moment(defaultDate).month();
        
        this.setState({
            viewingMonth: viewingMonth
        });
    }

    getDefaultDate = () => {
        if (this.props.defaultDate) {
            return this.props.defaultDate;
        }
        else {
            return moment().toDate();
        }
    }
    incrementViewingMonth = () => {
        var currentMonth = this.state.viewingMonth;
        var nextMonth = currentMonth + 1; 
        this.setState({
            viewingMonth: nextMonth
        })
    }
    decrementViewingMonth = () => {
        var currentMonth = this.state.viewingMonth;
        var previousMonth = currentMonth - 1; 
        this.setState({
            viewingMonth: previousMonth
        })
    }
    addOneYearToViewingMonth = () => {
        var copyOfState = {...this.state}
        var datePlusOneYear = moment(copyOfState.viewingMonth).add(1, 'years');
        var viewingMonth = moment(datePlusOneYear).month();
        this.setState({viewingMonth})
    }
    subtractOneYearToViewingMonth = () => {
        var copyOfState = {...this.state}
        var datePlusOneYear = moment(copyOfState.viewingMonth).subtract(1, 'years');
        var viewingMonth = moment(datePlusOneYear).month();
        this.setState({viewingMonth})
    }
    determineIfDateIsDayNumberInWeek = (date, givenDayNumber) => {
        var dateIsDayNumberInWeek = false;
        // if date.dayNumberInWeek or something like that === givenDayNumber {
            // dateIsDayNumberInWeek = true;    
        // }
        return dateIsDayNumberInWeek;
    }
    determineIfDateShouldBeDisabledByMinDateMaxDate = (date) => {
        var dateShouldBeDisabled = false;

        if (this.props.minDate) {
            if (date < this.props.minDate) {
                dateShouldBeDisabled = true;
            }
        }
        if (this.props.maxDate) {
            if (date > this.props.maxDate) {
                dateShouldBeDisabled = true;
            }
        }

        return dateShouldBeDisabled
    }

    render() {
        // This guy needs the following for the HD app:
            // minDate
            // maxDate
            // defaultDate
            // selectedDate
            // disabled logic run against each date in viewing month
            // showDatepicker true false
            // 
        return (
            <StyledDatePickerContainer>
                <Header 
                    incrementViewingMonth={this.incrementViewingMonth}
                    decrementViewingMonth={this.decrementViewingMonth}
                    viewingMonth={this.state.viewingMonth}
                />
                <DaysOfTheWeekBanner />
                <AllShownWeeks
                    viewingMonth={this.state.viewingMonth}
                />
            </StyledDatePickerContainer>
        );
    }
}

export default StyledDatePicker;