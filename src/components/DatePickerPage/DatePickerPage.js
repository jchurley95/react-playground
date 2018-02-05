import React, { Component } from 'react';
import DatePicker from './DatePicker/DatePicker';
import styled from 'styled-components';

const DatePickerPageContainer = styled.div`
    margin: 20px;
`

class DatePickerPage extends Component {
    constructor() {
        super();
        
        this.state = {

        }
    }

    render() {
        return (
            <DatePickerPageContainer>
                <DatePicker />
            </DatePickerPageContainer>
        );
    }
}

export default DatePickerPage;