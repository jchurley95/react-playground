import React, { Component } from 'react';
import DatePicker from './DatePicker/DatePicker';
import styled from 'styled-components';
import moment from 'moment';

const DatePickerPageContainer = styled.div`
    margin: 20px;
`

class DatePickerPage extends Component {
    constructor() {
        super();
        
        this.state = {
            selectedDate: moment().toDate().toString(),
            defaultDate: moment().toDate().toString()
        }
    }

    handleDateSelection = (date) => {
        //moment([year, month, day])
        console.log("date is: ", date)
        // var date = new Date(year, month, day);
        this.setState({selectedDate: date});
    }

    render() {
        var selectedDate = this.state.selectedDate;
        return (
            <DatePickerPageContainer>
                <div>Selected Date is: {selectedDate}</div>
                <br />
                <DatePicker handleDateSelection={this.handleDateSelection} defaultDate={this.state.defaultDate}/>
            </DatePickerPageContainer>
        );
    }
}

export default DatePickerPage;