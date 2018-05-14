import React, { Component } from 'react';
// import DatePicker from './Old/DatePicker/DatePicker';
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
            defaultDateTwo: moment().toDate().toString(),
            selectedDateThree: null,
            defaultDateThree: moment().add(2, 'weeks'),
            minDateThree: null,
            maxDateThree: null
        }
    }

    componentWillMount() {
        let minDate = this.getMinDate();
        let maxDate = this.getMaxDate();
        this.setState({
            minDateThree: minDate,
            maxDateThree: maxDate
        })
    }

    getMinDate = () => {
        let minDate = moment().subtract(180, 'days');
        return minDate;
    }
    getMaxDate = () => {
        let maxDate = moment().add(1, 'years');
        return maxDate;
    }
    setMinDate = (minDate) => {
        this.setState({
            minDateThree: minDate
        })
    }
    setMaxDate = (maxDate) => {
        this.setState({
            maxDateThree: maxDate
        })
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

                <div>Selected Date is: 
                    {
                        this.state.selectedDateThree
                        ?
                        moment(this.state.selectedDateThree).toString()
                        :
                        this.state.defaultDateThree.toString()
                    }
                </div>
                <DatePicker
                    handleDateSelection={this.handleThirdDateSelection}
                    defaultDate={this.state.defaultDateThree}
                    selectedDate={this.state.selectedDateThree}
                    minDate={this.state.minDateThree}
                    maxDate={this.state.maxDateThree}
                />
                
                {/* <div>Selected Date is: {this.state.selectedDateOne}</div>
                <br />

                <DatePicker handleDateSelection={this.handleFirstDateSelection} defaultDate={this.state.defaultDateOne} />
                <br />

                <div>Selected Date is: {this.state.selectedDateTwo}</div>
                <br />
                <DatePicker handleDateSelection={this.handleSecondDateSelection} defaultDate={this.state.defaultDateTwo} /> */}

            </DatePickerPageContainer>
        );
    }
}

export default DatePickerPage;