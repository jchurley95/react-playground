import React from 'react';
import moment from 'moment';
import { MonthBannerContainer, MonthName, NextMonth, PreviousMonth } from './Styled/MonthBanner.styled';

const MonthBanner = (props) => {
    const nameOfMonth = moment().month(props.viewingMonth).format('MMMM').toString();
    console.log(nameOfMonth);
    return (
        <MonthBannerContainer>
            <PreviousMonth onClick={props.decrementMonth}>Prev</PreviousMonth>
            <MonthName>{nameOfMonth}</MonthName>
            <NextMonth onClick={props.incrementMonth}>Next</NextMonth>
        </MonthBannerContainer>
    );
};

export default MonthBanner;