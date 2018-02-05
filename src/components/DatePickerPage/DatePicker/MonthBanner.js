import React from 'react';
import { MonthBannerContainer, MonthName, NextMonth, PreviousMonth } from './Styled/MonthBanner.styled';

const MonthBanner = (props) => {
    return (
        <MonthBannerContainer>
            <PreviousMonth onClick={props.decrementMonth}>Prev</PreviousMonth>
            <MonthName>Month</MonthName>
            <NextMonth onClick={props.incrementMonth}>Next</NextMonth>
        </MonthBannerContainer>
    );
};

export default MonthBanner;