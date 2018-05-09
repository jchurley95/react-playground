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

    render() {
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