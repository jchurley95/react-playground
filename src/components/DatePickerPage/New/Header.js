import React from 'react';
import moment from 'moment';
import {
    HeaderContainer,
    MonthName,
    YearText,
    PreviousMonthButton,
    NextMonthButton
} from './Styled/StyledDatePicker.styled';

const Header = (props) => {
    const nameOfMonth = moment().month(props.viewingMonth).format('MMMM').toString();  
    const year = moment().month(props.viewingMonth).format('YYYY').toString();
    return (
        <HeaderContainer>
            <PreviousMonthButton onClick={props.decrementViewingMonth}>Prev</PreviousMonthButton>
            <MonthName>{nameOfMonth}</MonthName>
            <YearText>{year}</YearText>
            <NextMonthButton onClick={props.incrementViewingMonth}>Next</NextMonthButton>
        </HeaderContainer>
    );
};

export default Header;