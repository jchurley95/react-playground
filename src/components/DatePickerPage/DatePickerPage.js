import React, { Component } from 'react';
import DatePicker from './DatePicker/DatePicker';
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
            defaultDateTwo: moment().toDate().toString()
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


    render() {
        return (
            <DatePickerPageContainer>
                <h3>Moment.js Date Picker</h3>
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