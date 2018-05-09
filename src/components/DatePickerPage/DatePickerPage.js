import React, { Component } from 'react';
import DatePicker from './Old/DatePicker/DatePicker';
import StyledDatePicker from './New/StyledDatePicker';
import styled from 'styled-components';
import moment from 'moment';

const DatePickerPageContainer = styled.div`
    padding: 20px;
`

class DatePickerPage extends Component {
    constructor() {
        super();

        this.state = {
            selectedDateOne: moment().toDate().toString(),
            defaultDateOne: moment().toDate().toString(),
            selectedDateTwo: moment().toDate().toString(),
            defaultDateTwo: moment().toDate().toString(),
            selectedDateThree: moment().toDate().toString(),
            defaultDateThree: moment().toDate().toString()
        }
    }

    handleFirstDateSelection = (date) => {
        this.setState({
            selectedDateOne: date
        });
    }

    handleSecondDateSelection = (date) => {
        this.setState({
            selectedDateTwo: date
        });
    }

    handleThirdDateSelection = (date) => {
        this.setState({
            selectedDateThree: date
        });
    }


    render() {
        return (
            <DatePickerPageContainer>
                <h3>Moment.js Date Picker</h3>

                <div>Selected Date is: {this.state.selectedDateThree}</div>
                <StyledDatePicker
                    handleDateSelection={this.handleThirdDateSelection}
                    defaultDate={this.state.defaultDateThree}
                />
                
                <div>Selected Date is: {this.state.selectedDateOne}</div>
                <br />

                <DatePicker handleDateSelection={this.handleFirstDateSelection} defaultDate={this.state.defaultDateOne} />
                <br />

                <div>Selected Date is: {this.state.selectedDateTwo}</div>
                <br />
                <DatePicker handleDateSelection={this.handleSecondDateSelection} defaultDate={this.state.defaultDateTwo} />

            </DatePickerPageContainer>
        );
    }
}

export default DatePickerPage;