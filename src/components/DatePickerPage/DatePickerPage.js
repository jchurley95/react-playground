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
            selectedDate: "",
            defaultDate: null
        }
    }

    handleDateSelection = (event) => {
        //moment([year, month, day])
        console.log("hit")
        var year = "YYYY";
        var month = "-MM-";
        var day = event.target.innerHTML;
        var date = day + month + year;
        console.log(date)
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