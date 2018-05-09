import React from 'react';
import { DayOfTheWeekContainer, DaysOfTheWeekBannerContainer } from './Styled/DaysOfTheWeekBanner.styled';
import moment from 'moment';

const DaysOfTheWeekBanner = () => {
    let weekdaysShort = moment()._locale._weekdaysShort;

    return (
        <DaysOfTheWeekBannerContainer>
            {
                weekdaysShort.map((weekday) => {
                    return (
                        <DayOfTheWeekContainer key={weekday}>
                            {weekday}
                        </DayOfTheWeekContainer>
                    )
                })
            }
        </DaysOfTheWeekBannerContainer>
    );
};

export default DaysOfTheWeekBanner;