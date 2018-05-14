import React from 'react';
import {
    DaysOfTheWeekBannerContainer,
    DayOfTheWeek
} from './Styled/StyledDatePicker.styled';

const DaysOfTheWeekBanner = (props) => {
    const fullNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const firstThreeLetters = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
        <DaysOfTheWeekBannerContainer>
            {
                firstThreeLetters.map((day, index) => {
                    return (
                        <DayOfTheWeek
                            key={index}
                        >
                            {day}
                        </DayOfTheWeek>
                    )
                })
            }
        </DaysOfTheWeekBannerContainer>
    );
};

export default DaysOfTheWeekBanner;