import React from 'react';
import { AllWeeksContainer } from './Styled/AllWeeks.styled';
import Week from './Week';

const AllWeeks = (props) => {

    return (
        <AllWeeksContainer>
            
            <Week handleDateSelection={props.handleDateSelection}/>
            <Week handleDateSelection={props.handleDateSelection}/>
            <Week handleDateSelection={props.handleDateSelection}/>
            <Week handleDateSelection={props.handleDateSelection}/>
            
        </AllWeeksContainer>
    );
};

export default AllWeeks;