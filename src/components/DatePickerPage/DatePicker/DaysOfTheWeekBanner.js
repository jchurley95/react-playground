import React from 'react';
import { DaysOfTheWeekBannerContainer } from './Styled/DaysOfTheWeekBanner.styled';
import {DayContainer} from './Styled/Day.styled';
import moment from 'moment';

const DaysOfTheWeekBanner = () => {
    let weekdaysShort = moment()._locale._weekdaysShort;
    
    return (
        <DaysOfTheWeekBannerContainer>
            {
                weekdaysShort.map((weekday) => {
                    return (
                        <DayContainer key={weekday}>
                            {weekday}
                        </DayContainer>
                    )
                })
            }
        </DaysOfTheWeekBannerContainer>
    );
};

export default DaysOfTheWeekBanner;