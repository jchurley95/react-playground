import React from 'react';
import {
    AllShownWeeksContainer
} from './Styled/StyledDatePicker.styled';

const AllShownWeeks = (props) => {
    var daysToShowFromPreviousMonth = [];
    var daystoShowFromViewingMonth = [];    
    var daysToShowFromNextMonth = [];
    var allDaysToShow = [];
    allDaysToShow = allDaysToShow.concat(daysToShowFromPreviousMonth);
    allDaysToShow = allDaysToShow.concat(daysToShowFromViewingMonth);
    allDaysToShow = allDaysToShow.concat(daysToShowFromNextMonth);
    
    var weekObjects = [];
    return (
        <AllShownWeeksContainer>
            
        </AllShownWeeksContainer>
    );
};

export default AllShownWeeks;